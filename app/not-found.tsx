import Link from "next/link";
export default function NotFound() {
  return (
    <div className="error-page">
      <span className="eyebrow">404</span>
      <h1>Nothing here, just yet.</h1>
      <p>This page might have moved, or the link might be a little off.</p>
      <Link href="/" className="text-button">
        ← Back home
      </Link>
    </div>
  );
}
