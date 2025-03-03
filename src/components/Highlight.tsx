
import { useEffect, useRef } from "react";

interface HighlightProps {
  children: React.ReactNode;
}

const Highlight = ({ children }: HighlightProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && bgRef.current) {
            bgRef.current.style.transform = "scaleX(1)";
          }
        });
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="highlight relative inline-block p-1">
      <div
        ref={bgRef}
        className="highlight-bg origin-left transform scale-x-0"
      ></div>
      <span className="relative z-10">{children}</span>
    </div>
  );
};

export default Highlight;
