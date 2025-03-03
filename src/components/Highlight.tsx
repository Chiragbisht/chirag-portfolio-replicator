
import { useEffect, useRef } from "react";

interface HighlightProps {
  children: React.ReactNode;
}

const Highlight = ({ children }: HighlightProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Apply the highlight effect immediately rather than waiting for intersection
    if (bgRef.current) {
      bgRef.current.style.transform = "scaleX(1)";
    }
  }, []);

  return (
    <div ref={containerRef} className="highlight relative inline-block p-1">
      <div
        ref={bgRef}
        className="highlight-bg"
      ></div>
      <span className="relative z-10">{children}</span>
    </div>
  );
};

export default Highlight;
