import logo2 from "../assets/images/mofalog.png";
import logo3 from "../assets/images/fsrp.png";
import logo4 from "../assets/images/gmetlogo.jpg";
import { Link } from "react-router-dom"; // Assuming you're using react-router for navigation
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="bg-white fixed top-0 left-0 w-full p-2 md:p-3 flex flex-col md:flex-row justify-between items-center z-10 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logos Section */}
        <div className="flex items-center justify-center space-x-2 mb-2 md:mb-0">
          <Link to="/">
            <img src={logo2} alt="Mofa logo" className="h-8 md:h-10" />
          </Link>
          <Link to="/">
            <img src={logo3} alt="Fsrp logo" className="h-8 md:h-10" />
          </Link>
          <Link to="/">
            <img src={logo4} alt="GMet logo" className="h-8 md:h-10" />
          </Link>
        </div>

        <nav className="relative inline-block text-left items-center justify-center space-x-2 md:space-x-4 text-sm">
          <div>
            <button
              type="button"
              onClick={toggleDropdown}
              className="inline-flex justify-between items-center w-full rounded-md border border-gray-400 bg-blue-900 text-white px-4 py-2 text-sm font-medium hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              GMet-GhAAP
              <svg
                className="ml-2 h-4 w-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          {isOpen && (
            <div
              className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabIndex="-1"
            >
              <div className="py-1" role="none">
                <a
                  href="https://mofa.gov.gh/site/"
                  target="_blank" // This line opens the link in a new tab
                  rel="noopener noreferrer" // Security feature to prevent vulnerabilities
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-400"
                >
                  Ministry of Food and Agriculture
                </a>
                <a
                  href="https://www.fsrp.org.gh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-400"
                >
                  Food System and Resilience Project (FSRP)
                </a>
                <a
                  href="https://www.meteo.gov.gh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-400"
                >
                  Ghana Meteorological Agency
                </a>
                <a
                  href="https://ghaap.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-400"
                >
                  GhAAP
                </a>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
