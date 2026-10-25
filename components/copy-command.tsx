"use client";
import { useEffect, useRef, useState } from "react";
import { Check, Copy } from "lucide-react";

export function CopyCommand() {
  const [status, setStatus] = useState("Copy command");
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(
    () => () => {
      if (timeout.current) clearTimeout(timeout.current);
    },
    [],
  );
  async function copy() {
    try {
      await navigator.clipboard.writeText("curl -L lagaryan.click");
      setStatus("Copied!");
    } catch {
      setStatus("Select the command to copy");
    }
    if (timeout.current) clearTimeout(timeout.current);
    timeout.current = setTimeout(() => setStatus("Copy command"), 2500);
  }
  return (
    <div className="command">
      <code>
        <span aria-hidden="true">$ </span>curl -L lagaryan.click
      </code>
      <button onClick={copy} aria-label={status} title={status}>
        {status === "Copied!" ? <Check size={15} /> : <Copy size={15} />}
      </button>
      <span className="sr-only" role="status">
        {status}
      </span>
    </div>
  );
}
