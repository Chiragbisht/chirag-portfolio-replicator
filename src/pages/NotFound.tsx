
import { Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  useEffect(() => {
    console.error("404 Error: Page not found");
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 md:p-10 animate-fade-in">
      <div className="text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 md:mb-6">404</h1>
        <p className="text-lg md:text-xl mb-6 md:mb-8">Page not found</p>
        <Link 
          to="/" 
          className="text-base hover:underline transition-all duration-300"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
