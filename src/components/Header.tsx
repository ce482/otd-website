
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">🎯</span>
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Off the Dome
          </span>
        </Link>
        
        <nav className="flex items-center space-x-6">
          <Link 
            to="/" 
            className={`text-sm font-medium transition-colors hover:text-purple-600 ${
              location.pathname === '/' ? 'text-purple-600' : 'text-gray-600'
            }`}
          >
            Home
          </Link>
          <Link 
            to="/support" 
            className={`text-sm font-medium transition-colors hover:text-purple-600 ${
              location.pathname === '/support' ? 'text-purple-600' : 'text-gray-600'
            }`}
          >
            Support
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
