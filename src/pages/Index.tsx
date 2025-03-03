
import { useState, useEffect } from "react";
import { Mail, Github, Linkedin } from "lucide-react";
import NavBar from "@/components/NavBar";
import Highlight from "@/components/Highlight";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen w-full bg-white flex flex-col items-center justify-between px-4 sm:px-6">
      <NavBar />

      {/* Main Content */}
      <main className={`flex-1 flex flex-col items-center justify-center w-full max-w-5xl transition-opacity duration-500 ${isLoaded ? 'animate-fade-up' : 'opacity-0'}`}>
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            <Highlight>hi, i'm chirag</Highlight>
          </h1>
          <p className="mt-6 text-lg md:text-xl">:)</p>
        </div>
        
        <div className="flex gap-6 md:gap-8 mt-10 md:mt-12">
          <a 
            href="mailto:chiragbisht2003@gmail.com" 
            className="transition-transform hover:scale-110 duration-300"
            aria-label="Email"
          >
            <Mail size={22} className="md:w-6 md:h-6" />
          </a>
          <a 
            href="https://github.com/Chiragbisht" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="transition-transform hover:scale-110 duration-300"
            aria-label="GitHub"
          >
            <Github size={22} className="md:w-6 md:h-6" />
          </a>
          <a 
            href="https://www.linkedin.com/in/chiragbisht/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="transition-transform hover:scale-110 duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin size={22} className="md:w-6 md:h-6" />
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className={`w-full max-w-5xl py-6 md:py-10 text-center text-xs md:text-sm ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}>
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">
          <span>Chirag Bisht</span>
          <span className="hidden md:inline">|</span>
          <a 
            href="mailto:chiragbisht2003@gmail.com" 
            className="hover:underline"
          >
            chiragbisht2003@gmail.com
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Index;
