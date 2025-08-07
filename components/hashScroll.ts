// components/hashScroll.ts
"use client";
import { useRouter, usePathname } from "next/navigation";

export function useHashScroll() {
  const router = useRouter();
  const pathname = usePathname();

  const handleHashNavigation = (url: string) => {
    // If external link
    if (url.startsWith("http")) {
      window.open(url, "_blank");
      return;
    }
    // If root path, just push
    if (url === "/") {
      router.push("/");
      return;
    }
    // If hash navigation e.g. "/#about"
    if (url.startsWith("/#")) {
      const hash = url.split("#")[1];
      if (pathname === "/") {
        // Already on home, smooth scroll
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        // On another page, store hash and navigate
        window.localStorage.setItem("pendingHash", hash);
        router.push("/");
      }
      return;
    }
    // Otherwise, just navigate
    router.push(url);
  };

  return handleHashNavigation;
}
