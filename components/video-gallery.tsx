"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import { Play, X, ArrowUpRight } from "lucide-react";

const videos = [
  "1DGChttirWc",
  "YrtZOEnQJQU",
  "YEYFv33BFHY",
  "CvruYtbCOQY",
  "MtadvXWDlyg",
  "K8zqI1BnyVQ",
  "NoImOIqAf2Q",
  "SWavjmLxP3o",
  "Kc3HLHQPvSI",
  "Aqvfa--rxTM",
  "Zs2kAO_HnPc",
  "XD-Kb9ASSU4",
  "s9B-1X33DbA",
  "_4NMqcaqexk",
  "Yz2YoKbJneo",
  "enI0SdFU5E4",
  "Hba-4a8aRA0",
  "wIAVW5feHJM",
  "jPiNw3C5kPY",
].map((id, index) => ({
  id,
  title: `Edit ${String(index + 1).padStart(2, "0")}`,
  short: index >= 17,
}));

export function VideoGallery() {
  const [selected, setSelected] = useState<(typeof videos)[number] | null>(
    null,
  );
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement | null>(null);
  function close() {
    dialog.current?.close();
  }
  function onClose() {
    setSelected(null);
    trigger.current?.focus();
  }
  return (
    <>
      <div className="video-grid">
        {videos.map((video) => (
          <button
            key={video.id}
            className="video-item"
            aria-label={`Play ${video.title}`}
            onClick={(event) => {
              trigger.current = event.currentTarget;
              setSelected(video);
              dialog.current?.showModal();
            }}
          >
            <span className="video-thumbnail">
              <Image
                src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                alt={`Video thumbnail for ${video.title}`}
                fill
                sizes="(max-width: 370px) 90vw, (max-width: 720px) 45vw, 330px"
              />
              <span className="video-play">
                <Play size={14} fill="currentColor" aria-hidden="true" />
              </span>
            </span>
            <span className="video-caption">
              <span>{video.title}</span>
              <small>{video.short ? "Short" : "Video"} ↗</small>
            </span>
          </button>
        ))}
      </div>
      <dialog
        ref={dialog}
        className="video-dialog"
        aria-labelledby="video-title"
        onClose={onClose}
        onClick={(event) => {
          if (event.target === dialog.current) {
            const rect = dialog.current.getBoundingClientRect();
            if (
              event.clientX < rect.left ||
              event.clientX > rect.right ||
              event.clientY < rect.top ||
              event.clientY > rect.bottom
            )
              close();
          }
        }}
      >
        <div className="dialog-header">
          <h2 id="video-title">{selected?.title ?? "Video"}</h2>
          <button onClick={close} aria-label="Close video" autoFocus>
            <X size={18} />
          </button>
        </div>
        {selected && (
          <>
            <iframe
              key={selected.id}
              src={`https://www.youtube-nocookie.com/embed/${selected.id}?autoplay=1`}
              title={selected.title}
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
            <a
              className="quiet-link"
              href={`https://youtu.be/${selected.id}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Watch on YouTube
              <ArrowUpRight size={13} />
            </a>
          </>
        )}
      </dialog>
    </>
  );
}
