import { useState, useEffect, useRef } from "react";
import { FaHome, FaBars } from "react-icons/fa"; // Import home and menu icons
import { Link } from "react-router-dom";
import logo2 from "../assets/images/mofalog.png";
import logo3 from "../assets/images/fsrp.png";
import logo4 from "../assets/images/gmetlogo.jpg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close dropdown if user clicks outside the dropdown menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <header className="bg-white fixed top-0 left-0 w-full p-2 md:p-3 flex justify-between items-center z-10 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logos Section */}
        <div className="flex items-center space-x-4 mb-2 md:mb-0">
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

        {/* Mobile Menu Toggle */}
        <div className="flex items-center md:hidden">
          <button onClick={toggleMobileMenu}>
            <FaBars className="h-6 w-6 text-blue-900" />
          </button>
        </div>

        {/* Navigation Section */}
        <div className="hidden md:flex align-middle items-center">
          {/* Home Icon in the middle */}
          <Link to="/" className="text-blue-900 hover:text-blue-800 mx-6">
            <FaHome className="h-6 w-6" />
          </Link>

          {/* Dropdown Menu */}
          <nav
            className="relative inline-block text-left pl-6 border-l-2 border-l-gray-500"
            ref={dropdownRef}
          >
            <button
              type="button"
              onClick={toggleDropdown}
              className="inline-flex justify-between items-center rounded-md border border-gray-400 bg-blue-900 text-white px-4 py-2 text-sm font-medium hover:bg-blue-800 focus:outline-none"
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

            {isOpen && (
              <div
                className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
              >
                <div className="py-1" role="none">
                  <a
                    href="https://mofa.gov.gh/site/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-300"
                  >
                    Ministry of Food and Agriculture
                  </a>
                  <a
                    href="https://www.fsrp.org.gh/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-300"
                  >
                    Food System and Resilience Project (FSRP)
                  </a>
                  <a
                    href="https://www.meteo.gov.gh/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-300"
                  >
                    Ghana Meteorological Agency
                  </a>
                  <a
                    href="https://ghaap.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-300"
                  >
                    GhAAP
                  </a>
                </div>
              </div>
            )}
          </nav>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg z-10">
          <nav className="flex flex-col text-left space-y-4 py-4">
            <Link
              to="/"
              className="block px-6 text-blue-900 font-semibold hover:text-blue-800"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <a
              href="https://mofa.gov.gh/site/"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-6 text-gray-700 hover:bg-red-400"
            >
              Ministry of Food and Agriculture
            </a>
            <a
              href="https://www.fsrp.org.gh/"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-6 text-gray-700 hover:bg-red-400"
            >
              Food System and Resilience Project (FSRP)
            </a>
            <a
              href="https://www.meteo.gov.gh/"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-6 text-gray-700 hover:bg-red-400"
            >
              Ghana Meteorological Agency
            </a>
            <a
              href="https://ghaap.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-6 text-gray-700 hover:bg-red-400"
            >
              GhAAP
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
