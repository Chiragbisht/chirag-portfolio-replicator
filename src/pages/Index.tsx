
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
    <div className="min-h-screen w-full bg-white flex flex-col items-center justify-between">
      <NavBar />

      {/* Main Content */}
      <main className={`flex-1 flex flex-col items-center justify-center w-full max-w-5xl px-4 transition-opacity duration-500 ${isLoaded ? 'animate-fade-up' : 'opacity-0'}`}>
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">
            <Highlight>hi, i'm chirag</Highlight>
          </h1>
          <p className="mt-6 text-xl">:)</p>
        </div>
        
        <div className="flex gap-8 mt-12">
          <a 
            href="mailto:chiragbisht2003@gmail.com" 
            className="transition-transform hover:scale-110 duration-300"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
          <a 
            href="https://github.com/Chiragbisht" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="transition-transform hover:scale-110 duration-300"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a 
            href="https://www.linkedin.com/in/chiragbisht/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="transition-transform hover:scale-110 duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className={`w-full max-w-5xl px-4 py-10 text-center text-sm ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}>
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
        <div className="mt-2 text-xs text-gray-400">
          <span>Hugo and </span>
          <a 
            href="https://hello-friend.netlify.com/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:underline"
          >
            hello-friend
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Index;
