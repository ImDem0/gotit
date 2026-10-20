import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  component: Home,
});

function loadScript(src: string) {
  return new Promise<void>((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(`script[data-yasno="${src}"]`);
    if (existing) {
      resolve();
      return;
    }
    const script = document.createElement("script");
    script.src = src;
    script.async = false;
    script.dataset.yasno = src;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(src));
    document.body.appendChild(script);
  });
}

function Home() {
  useEffect(() => {
    let cancelled = false;
    loadScript("/yasno/data.js")
      .then(() => loadScript("/yasno/app.js"))
      .then(() => {
        if (!cancelled) window.dispatchEvent(new Event("yasno-boot"));
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  return <div id="yasno-root" />;
}
