'use client';

import { useEffect } from 'react';
import './linktree.css';

export default function LinktreePage() {
  useEffect(() => {
    // Split text animation logic
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const segmenter = new (Intl as any).Segmenter({
      granularity: "letter",
    });

    function spanWrap(element: HTMLElement) {
      element.ariaLabel = element.textContent || '';
      const letters = Array.from(segmenter.segment(element.textContent || ""));

      const wrappedLetters = letters
        .map(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (letter: any, index: number) => `<span data-char="${letter.segment}" style="transition-delay: ${index * 0.05}s">${letter.segment}</span>`
        )
        .join("");

      element.innerHTML = wrappedLetters;
    }

    const els = document.querySelectorAll(".animated-link");
    els.forEach((el) => {
      spanWrap(el as HTMLElement);

      // Add touch support for mobile
      el.addEventListener('touchstart', () => {
        el.classList.add('active');
      });

      el.addEventListener('touchend', () => {
        setTimeout(() => {
          el.classList.remove('active');
        }, 300);
      });
    });
  }, []);

  return (
    <div className="linktree-container">
      <div className="linktree-content">
        <div className="links-grid">
          
          <a href="https://instagram.com/lag_aryan" className="animated-link" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href="https://youtube.com/@lag_aryan4" className="animated-link" target="_blank" rel="noopener noreferrer">
            YouTube
          </a>
          <a href="https://github.com/lag-4" className="animated-link" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://x.com/lag_aryan" className="animated-link" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
        </div>
      </div>
    </div>
  );
}
