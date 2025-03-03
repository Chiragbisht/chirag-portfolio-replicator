
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="w-full max-w-5xl px-4 py-6 md:py-10 animate-fade-in">
      <nav className="flex justify-between items-center">
        <div>
          <Link to="/" className="text-lg font-medium transition-all duration-300 hover:opacity-70">chiragbisht.xyz</Link>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          <Link 
            to="/commonplace" 
            className={`nav-link text-sm ${isActive('/commonplace') ? 'font-bold' : ''}`}
          >
            Commonplace Book
          </Link>
          <Link 
            to="/posts" 
            className={`nav-link text-sm ${isActive('/posts') ? 'font-bold' : ''}`}
          >
            Posts
          </Link>
          <Link 
            to="/principles" 
            className={`nav-link text-sm ${isActive('/principles') ? 'font-bold' : ''}`}
          >
            Principles
          </Link>
          <Link 
            to="/questions" 
            className={`nav-link text-sm ${isActive('/questions') ? 'font-bold' : ''}`}
          >
            Questions
          </Link>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 py-4 bg-white animate-fade-in">
          <div className="flex flex-col gap-6">
            <Link 
              to="/commonplace" 
              className={`nav-link text-sm ${isActive('/commonplace') ? 'font-bold' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Commonplace Book
            </Link>
            <Link 
              to="/posts" 
              className={`nav-link text-sm ${isActive('/posts') ? 'font-bold' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Posts
            </Link>
            <Link 
              to="/principles" 
              className={`nav-link text-sm ${isActive('/principles') ? 'font-bold' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Principles
            </Link>
            <Link 
              to="/questions" 
              className={`nav-link text-sm ${isActive('/questions') ? 'font-bold' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Questions
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
