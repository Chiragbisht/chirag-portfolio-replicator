
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="w-full max-w-5xl px-4 py-10 animate-fade-in">
      <nav className="flex justify-between items-center">
        <div>
          <Link to="/" className="text-lg font-medium transition-all duration-300 hover:opacity-70">chirag.xyz</Link>
        </div>
        <div className="flex gap-8">
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
      </nav>
    </header>
  );
};

export default NavBar;
