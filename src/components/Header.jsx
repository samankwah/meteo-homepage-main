import { useState, useEffect, useRef } from "react";
import { FaHome, FaBars, FaChevronDown, FaShoppingCart } from "react-icons/fa"; // Import icons
import { Link } from "react-router-dom";
import PropTypes from "prop-types"; // Import PropTypes
import logo2 from "../assets/images/mofalog.png";
import logo3 from "../assets/images/fsrp.png";
import logo4 from "../assets/images/gmetlogo.jpg";

// Dropdown Component
const Dropdown = ({ links, title }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown if user clicks outside the dropdown menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsDropdownOpen(true)} // Show dropdown on hover
      onMouseLeave={() => setIsDropdownOpen(false)} // Hide dropdown when not hovering
      ref={dropdownRef}
    >
      <button className="block px-4 text-blue-900 font-semibold hover:text-blue-800">
        {title} <FaChevronDown className="inline ml-1" />
      </button>

      {isDropdownOpen && (
        <div className="absolute left-0 z-10 mt-1 w-48 bg-white shadow-lg rounded-md">
          <ul className="py-1">
            {links.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="block p-2 text-blue-600 hover:bg-gray-200 transition duration-200"
                  onClick={() => setIsDropdownOpen(false)} // Close dropdown on selection
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

// Define prop types for Dropdown
Dropdown.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
};

// Header Component
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // State to track which dropdown is open
  const mobileMenuRef = useRef(null);
  const forecastLinks = [
    { to: "/5-days-forecast", label: "5 Days Forecast" },
    { to: "/7-days-forecast", label: "7 Days Forecast" },
    { to: "/agro-bulletins", label: "Agrometeorological Bulletins" },
    { to: "/flood-drought", label: "Flood and Drought Bulletins" },
    { to: "/subseasonal-forecast", label: "Subseasonal 2 Seasonal Forecast" },
    { to: "/monthly-forecast", label: "Monthly Forecast" },
    { to: "/seasonal-forecast", label: "Seasonal Forecast" },
    { to: "/climate-report", label: "State of the Climate Report 2023" },
  ];

  const agricultureLinks = [
    { to: "/crop-calendar", label: "Crop Calendar 2024" },
    { to: "/poultry-calendar", label: "Poultry Calendar 2024" },
    { to: "/crop-advisory", label: "Crop Advisories" },
    { to: "/poultry-advisory", label: "Poultry Advisories" },
  ];

  const gmetLinks = [
    {
      href: "https://mofa.gov.gh/site/",
      label: "Ministry of Food and Agriculture",
    },
    {
      href: "https://www.fsrp.org.gh/",
      label: "Food System and Resilience Project (FSRP)",
    },
    { href: "https://www.meteo.gov.gh/", label: "Ghana Meteorological Agency" },
    { href: "https://ghaap.com/", label: "GhAAP" },
  ];
  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenuRef]);

  return (
    <header className="bg-white fixed top-0 left-0 w-full p-2 md:p-3 flex justify-between items-center z-10 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logos Section */}
        <div className="flex items-center space-x-2 mb-2 md:mb-0">
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
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <FaBars className="h-6 w-6 text-blue-900" />
          </button>
        </div>

        {/* Navigation Section */}
        <div className="hidden md:flex align-middle items-center justify-center">
          <Link
            to="/"
            className="block px-4 text-blue-900 font-semibold hover:text-blue-800"
          >
            Home
          </Link>

          {/* Forecast Dropdown */}
          <Dropdown links={forecastLinks} title="Weather" />

          {/* Agriculture Dropdown */}
          <Dropdown links={agricultureLinks} title="Agriculture" />

          {/* Shopping Cart Icon */}
          <Link
            to="/market-page"
            className="block px-4 text-blue-900 font-semibold hover:text-blue-800"
          >
            Market
          </Link>

          {/* GMet-GhAAP Dropdown */}
          <Dropdown
            links={gmetLinks.map((link) => ({
              to: link.href,
              label: link.label,
            }))}
            title="GMet-GhAAP"
          />
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMobileMenuOpen && (
        <div
          className="absolute top-16 left-0 w-full bg-white shadow-lg z-10"
          ref={mobileMenuRef} // Reference for outside click detection
        >
          <nav className="flex flex-col text-left space-y-2 py-2">
            <Link
              to="/"
              className="block px-4 text-blue-900 font-semibold hover:text-blue-800"
              onClick={() => setIsMobileMenuOpen(false)} // Close mobile menu
            >
              <FaHome className="h-6 w-6" />
            </Link>
            <Link
              to="/market-page"
              className="text-blue-900 hover:text-blue-800 mx-4"
              onClick={() => setIsMobileMenuOpen(false)} // Close mobile menu
            >
              <FaShoppingCart className="h-6 w-6 " />
            </Link>

            {/* Mobile Dropdown for Forecast */}
            <div>
              <button
                className="block px-4 text-blue-900 font-semibold hover:text-blue-800"
                onClick={() =>
                  setOpenDropdown(
                    openDropdown === "forecast" ? null : "forecast"
                  )
                }
              >
                Weather <FaChevronDown className="inline ml-1" />
              </button>
              {openDropdown === "forecast" && (
                <div className="pl-4">
                  {forecastLinks.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      className="block text-gray-700 hover:bg-gray-200"
                      onClick={() => {
                        setIsMobileMenuOpen(false); // Close mobile menu
                        setOpenDropdown(null); // Close dropdown
                      }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Dropdown for Agriculture */}
            <div>
              <button
                className="block px-4 text-blue-900 font-semibold hover:text-blue-800"
                onClick={() =>
                  setOpenDropdown(
                    openDropdown === "agriculture" ? null : "agriculture"
                  )
                }
              >
                Agriculture <FaChevronDown className="inline ml-1" />
              </button>
              {openDropdown === "agriculture" && (
                <div className="pl-4">
                  {agricultureLinks.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      className="block text-gray-700 hover:bg-gray-200"
                      onClick={() => {
                        setIsMobileMenuOpen(false); // Close mobile menu
                        setOpenDropdown(null); // Close dropdown
                      }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Dropdown for GMet-GhAAP */}
            <div>
              <button
                className="block px-4 text-blue-900 font-semibold hover:text-blue-800"
                onClick={() =>
                  setOpenDropdown(openDropdown === "gmet" ? null : "gmet")
                }
              >
                GMet-GhAAP <FaChevronDown className="inline ml-1" />
              </button>
              {openDropdown === "gmet" && (
                <div className="pl-4">
                  {gmetLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-gray-700 hover:bg-gray-200"
                      onClick={() => setIsMobileMenuOpen(false)} // Close mobile menu
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
