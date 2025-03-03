
import React from "react";

interface HighlightProps {
  children: React.ReactNode;
}

const Highlight = ({ children }: HighlightProps) => {
  return (
    <div className="highlight relative inline-block px-1 py-0.5">
      <div
        className="absolute inset-0 bg-yellow-200 z-0"
        style={{ 
          backgroundColor: "#FEF08A",
          width: "100%",
          height: "100%"
        }}
      ></div>
      <span className="relative z-10">{children}</span>
    </div>
  );
};

export default Highlight;
