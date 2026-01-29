import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function useScrollReveal() {
  const location = useLocation();

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    // Reset first (important when coming back to a page)
    elements.forEach((el) => {
      el.classList.remove("active");
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [location.pathname]); // 🔥 reruns on every route change
}
