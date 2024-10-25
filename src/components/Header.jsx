import { useState, useEffect, useRef } from "react";
import { FaHome, FaBars, FaChevronDown, FaShoppingCart } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import logo2 from "../assets/images/mofalog.png";
import logo3 from "../assets/images/fsrp.png";
import logo4 from "../assets/images/gmetlogo.jpg";

// Dropdown Component
const Dropdown = ({ links, title }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

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
      onMouseEnter={() => setIsDropdownOpen(true)}
      onMouseLeave={() => setIsDropdownOpen(false)}
      ref={dropdownRef}
    >
      <button className="block px-4 text-blue-900 font-semibold border-b-2 border-transparent hover:border-blue-600">
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
                  onClick={() => setIsDropdownOpen(false)}
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

Dropdown.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
};

const Header = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
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

        <div className="flex items-center md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <FaBars className="h-6 w-6 text-blue-900" />
          </button>
        </div>

        <div className="hidden md:flex align-middle items-center justify-center">
          <Link
            to="/"
            className={`block px-4 text-blue-900 font-semibold ${
              location.pathname === "/"
                ? "border-blue-600"
                : "border-transparent"
            } hover:border-blue-600`}
          >
            Home
          </Link>

          <Dropdown links={forecastLinks} title="Weather" />
          <Dropdown links={agricultureLinks} title="Agriculture" />

          <Link
            to="/market-page"
            className={`block px-4 text-blue-900 font-semibold border-b-2 ${
              location.pathname === "/market-page"
                ? "border-blue-600"
                : "border-transparent"
            } hover:border-blue-600`}
          >
            Market
          </Link>

          <Dropdown
            links={gmetLinks.map((link) => ({
              to: link.href,
              label: link.label,
            }))}
            title="GMet-GhAAP"
          />
        </div>
      </div>

      {isMobileMenuOpen && (
        <div
          className="absolute top-16 left-0 w-11/12 bg-white bg-opacity-90 shadow-lg rounded-lg p-4 mx-2 z-10"
          ref={mobileMenuRef}
        >
          <nav className="flex flex-col text-left space-y-4 py-4">
            <Link
              to="/"
              className="block px-4 py-2 text-blue-900 font-semibold hover:text-blue-800 rounded-md hover:bg-blue-100 transition duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <FaHome className="inline mr-2" /> Home
            </Link>
            <Link
              to="/market-page"
              className="block px-4 py-2 text-blue-900 font-semibold hover:text-blue-800 rounded-md hover:bg-blue-100 transition duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <FaShoppingCart className="inline mr-2" /> Market
            </Link>

            {/* Mobile Dropdown for Forecast */}
            <div>
              <button
                className="block w-full px-4 py-2 text-blue-900 font-semibold hover:text-blue-800 rounded-md hover:bg-blue-100 transition duration-200 text-left"
                onClick={() =>
                  setOpenDropdown(
                    openDropdown === "forecast" ? null : "forecast"
                  )
                }
              >
                Weather <FaChevronDown className="inline ml-1" />
              </button>
              {openDropdown === "forecast" && (
                <div className="pl-6 py-2">
                  {forecastLinks.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      className="block px-4 py-2 text-gray-700 hover:text-blue-800 rounded-md hover:bg-blue-100 transition duration-200"
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setOpenDropdown(null);
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
                className="block w-full px-4 py-2 text-blue-900 font-semibold hover:text-blue-800 rounded-md hover:bg-blue-100 transition duration-200 text-left"
                onClick={() =>
                  setOpenDropdown(
                    openDropdown === "agriculture" ? null : "agriculture"
                  )
                }
              >
                Agriculture <FaChevronDown className="inline ml-1" />
              </button>
              {openDropdown === "agriculture" && (
                <div className="pl-6 py-2">
                  {agricultureLinks.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      className="block px-4 py-2 text-gray-700 hover:text-blue-800 rounded-md hover:bg-blue-100 transition duration-200"
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setOpenDropdown(null);
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
                className="block w-full px-4 py-2 text-blue-900 font-semibold hover:text-blue-800 rounded-md hover:bg-blue-100 transition duration-200 text-left"
                onClick={() =>
                  setOpenDropdown(openDropdown === "gmet" ? null : "gmet")
                }
              >
                GMet-GhAAP <FaChevronDown className="inline ml-1" />
              </button>
              {openDropdown === "gmet" && (
                <div className="pl-6 py-2">
                  {gmetLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2 text-gray-700 hover:text-blue-800 rounded-md hover:bg-blue-100 transition duration-200"
                      onClick={() => setIsMobileMenuOpen(false)}
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
