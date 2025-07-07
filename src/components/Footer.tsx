
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">🎯</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Off the Dome
              </span>
            </Link>
            <p className="text-gray-400 max-w-md">
              AI-powered public speaking practice app that helps users build confidence, 
              get feedback, and engage with a community.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              © 2024 Off the Dome. All rights reserved.
            </p>
          </div>
          
          <nav className="flex space-x-8">
            <Link 
              to="/" 
              className="text-gray-400 hover:text-white transition-colors"
            >
              Home
            </Link>
            <Link 
              to="/support" 
              className="text-gray-400 hover:text-white transition-colors"
            >
              Support
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
