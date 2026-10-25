import { VideoGallery } from "@/components/video-gallery";
export const metadata = { title: "Films & editing" };
export default function EditingPage() {
  return (
    <>
      <header className="page-heading">
        <span className="eyebrow">Outside the code editor</span>
        <h1>A different kind of editing.</h1>
        <p>
          A collection of my video work. Experiments in pacing, motion, and
          telling a story through a cut.
        </p>
      </header>
      <VideoGallery />
      <div className="detail-end">
        <a
          className="quiet-link"
          href="https://youtube.com/@lag_aryan4"
          target="_blank"
          rel="noopener noreferrer"
        >
          More on YouTube ↗
        </a>
      </div>
    </>
  );
}
