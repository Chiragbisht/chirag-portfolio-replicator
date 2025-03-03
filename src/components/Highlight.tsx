
import { useEffect, useRef } from "react";

interface HighlightProps {
  children: React.ReactNode;
}

const Highlight = ({ children }: HighlightProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Make sure the highlight background is visible
    if (bgRef.current) {
      bgRef.current.style.transform = "scaleX(1)";
      bgRef.current.style.opacity = "1";
    }
  }, []);

  return (
    <div ref={containerRef} className="highlight relative inline-block px-1 py-0.5">
      <div
        ref={bgRef}
        className="highlight-bg"
        style={{ 
          backgroundColor: "#FEF08A", // Explicit yellow color
          width: "100%",
          height: "100%"
        }}
      ></div>
      <span className="relative z-10">{children}</span>
    </div>
  );
};

export default Highlight;
