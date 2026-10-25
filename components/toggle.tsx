"use client";

import { useEffect, useRef } from "react";
import { flushSync } from "react-dom";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const DURATION = 280;
const RAPID_CLICK_WINDOW = 400;
const PIXELS_PER_TILE = 8;

type Tile = { x: number; y: number; delay: number };
type Reveal = { canvas: HTMLCanvasElement; frame: number };

// A tiny canvas is scaled up for the pixel effect. The work is bounded to 128
// tiles; no page screenshots, clipping paths, or per-tile animation layers.
function makeTiles(
  width: number,
  height: number,
  originX: number,
  originY: number,
) {
  let size = Math.max(48, Math.ceil(Math.sqrt((width * height) / 128)));
  while (Math.ceil(width / size) * Math.ceil(height / size) > 128) size++;
  const columns = Math.ceil(width / size);
  const rows = Math.ceil(height / size);
  const maxDistance = Math.max(
    ...[
      [0, 0],
      [width, 0],
      [0, height],
      [width, height],
    ].map(([x, y]) => Math.hypot(x - originX, y - originY)),
  );
  const tiles = Array.from({ length: columns * rows }, (_, index): Tile => {
    const x = index % columns;
    const y = Math.floor(index / columns);
    return {
      x,
      y,
      delay:
        (Math.hypot(x * size - originX, y * size - originY) / maxDistance) *
          0.6 +
        (((index * 17 + 13) % 23) / 23) * 0.1,
    };
  });
  return { size, columns, rows, tiles };
}

export function ModeToggle() {
  const { setTheme } = useTheme();
  const active = useRef<Reveal | null>(null);
  const lastClick = useRef(-Infinity);
  const cache = useRef<{
    key: string;
    grid: ReturnType<typeof makeTiles>;
  } | null>(null);

  function clearReveal() {
    if (!active.current) return;
    cancelAnimationFrame(active.current.frame);
    active.current.canvas.remove();
    active.current = null;
  }

  useEffect(
    () => () => {
      if (!active.current) return;
      cancelAnimationFrame(active.current.frame);
      active.current.canvas.remove();
    },
    [],
  );

  function toggle(event: React.MouseEvent<HTMLButtonElement>) {
    clearReveal();
    const target = document.documentElement.classList.contains("dark")
      ? "light"
      : "dark";
    const now = performance.now();
    const rapidClick = now - lastClick.current < RAPID_CLICK_WINDOW;
    lastClick.current = now;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const previousBackground = getComputedStyle(document.documentElement)
      .getPropertyValue("--background")
      .trim();

    // Apply every click synchronously, independently of the decorative effect.
    flushSync(() => setTheme(target));
    if (rapidClick || reducedMotion) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const width = window.innerWidth;
    const height = window.innerHeight;
    const x = Math.round(rect.x + rect.width / 2);
    const y = Math.round(rect.y + rect.height / 2);
    const key = `${width}:${height}:${x}:${y}`;
    if (cache.current?.key !== key)
      cache.current = { key, grid: makeTiles(width, height, x, y) };
    const { size, columns, rows, tiles } = cache.current.grid;
    const canvas = document.createElement("canvas");
    canvas.className = "theme-reveal";
    canvas.setAttribute("aria-hidden", "true");
    canvas.width = columns * PIXELS_PER_TILE;
    canvas.height = rows * PIXELS_PER_TILE;
    canvas.style.width = `${columns * size}px`;
    canvas.style.height = `${rows * size}px`;
    const context = canvas.getContext("2d", { alpha: true });
    if (!context) return;
    context.fillStyle = previousBackground;
    context.fillRect(0, 0, canvas.width, canvas.height);
    document.body.appendChild(canvas);
    const reveal: Reveal = { canvas, frame: 0 };
    active.current = reveal;
    const start = performance.now();
    function draw(time: number) {
      if (active.current !== reveal || !context) return;
      const progress = (time - start) / DURATION;
      if (progress >= 1) {
        clearReveal();
        return;
      }
      context.clearRect(0, 0, canvas.width, canvas.height);
      for (const tile of tiles) {
        const edge = Math.round(
          PIXELS_PER_TILE *
            (1 - Math.min(1, Math.max(0, (progress - tile.delay) / 0.3))),
        );
        if (!edge) continue;
        const inset = Math.floor((PIXELS_PER_TILE - edge) / 2);
        context.fillRect(
          tile.x * PIXELS_PER_TILE + inset,
          tile.y * PIXELS_PER_TILE + inset,
          edge,
          edge,
        );
      }
      reveal.frame = requestAnimationFrame(draw);
    }
    reveal.frame = requestAnimationFrame(draw);
  }

  return (
    <button
      className="theme-toggle"
      onClick={toggle}
      aria-label="Toggle light and dark theme"
      title="Toggle light and dark theme"
    >
      <Sun className="theme-sun" size={18} aria-hidden="true" />
      <Moon className="theme-moon" size={18} aria-hidden="true" />
    </button>
  );
}
