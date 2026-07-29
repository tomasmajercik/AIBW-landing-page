import { useEffect } from "react";

// Postupné objavovanie obsahu pri scrollovaní.
// Každý prvok s atribútom data-reveal dostane triedu is-visible,
// keď sa dostane do zorného poľa. Zvyšok rieši CSS.
export default function useReveal() {
  useEffect(() => {
    const items = document.querySelectorAll("[data-reveal]");

    // Kto má vypnuté animácie v systéme, uvidí všetko rovno.
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      items.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
    );

    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}
