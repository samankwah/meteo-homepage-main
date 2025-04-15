// import { useState, useEffect, useRef } from "react";
// import {
//   FaHome,
//   FaBars,
//   FaChevronDown,
//   FaShoppingCart,
//   FaSeedling,
//   FaCloudSun,
//   FaComments,
//   FaUser,
// } from "react-icons/fa";
// import { Link, useLocation } from "react-router-dom";
// import PropTypes from "prop-types";
// import logo2 from "../assets/images/ddt_log.png";

// // Dropdown Component
// const Dropdown = ({ links, title }) => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const dropdownRef = useRef(null);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsDropdownOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [dropdownRef]);

//   return (
//     <div
//       className="relative"
//       onMouseEnter={() => setIsDropdownOpen(true)}
//       onMouseLeave={() => setIsDropdownOpen(false)}
//       ref={dropdownRef}
//     >
//       <button className="block px-4 text-gray-50 font-semibold border-b-1 border-transparent hover:border-blue-600 text-sm">
//         {title} <FaChevronDown className="inline ml-2" />
//       </button>

//       {isDropdownOpen && (
//         <div
//           className="absolute left-0 z-10 w-48 bg-white/100 backdrop-blur-md border border-white/30 rounded-md shadow-lg"
//           style={{ top: "100%" }}
//         >
//           <ul className="py-1">
//             {links.map((link) => (
//               <li key={link.to}>
//                 <Link
//                   to={link.to}
//                   className="block p-2 text-blue-600 hover:bg-gray-200 transition duration-200 text-sm"
//                   onClick={() => setIsDropdownOpen(false)}
//                 >
//                   {link.label}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// Dropdown.propTypes = {
//   links: PropTypes.arrayOf(
//     PropTypes.shape({
//       to: PropTypes.string.isRequired,
//       label: PropTypes.string.isRequired,
//     })
//   ).isRequired,
//   title: PropTypes.string.isRequired,
// };

// const Header = () => {
//   const location = useLocation();
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [openDropdown, setOpenDropdown] = useState(null);
//   const mobileMenuRef = useRef(null);

//   const forecastLinks = [
//     { to: "/5-days-forecast", label: "5 Days Forecast" },
//     { to: "/7-days-forecast", label: "7 Days Forecast" },
//     { to: "/agro-bulletins", label: "Agrometeorological Bulletins" },
//     { to: "/flood-drought", label: "Flood and Drought Bulletins" },
//     { to: "/subseasonal-forecast", label: "Subseasonal 2 Seasonal Forecast" },
//     { to: "/monthly-forecast", label: "Monthly Forecast" },
//     { to: "/seasonal-forecast", label: "Seasonal Forecast" },
//     { to: "/climate-report", label: "State of the Climate Report 2023" },
//   ];

//   const agricultureLinks = [
//     { to: "/crop-calendar", label: "Crop Calendar" },
//     { to: "/poultry-calendar", label: "Poultry Calendar" },
//     { to: "/crop-advisory", label: "Crop Advisories" },
//     { to: "/poultry-advisory", label: "Poultry Advisories" },
//   ];

//   const gmetLinks = [
//     {
//       href: "https://mofa.gov.gh/site/",
//       label: "Ministry of Food and Agriculture",
//     },
//     {
//       href: "https://www.fsrp.org.gh/",
//       label: "Food System and Resilience Project (FSRP)",
//     },
//     { href: "https://www.meteo.gov.gh/", label: "Ghana Meteorological Agency" },
//   ];

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (
//         mobileMenuRef.current &&
//         !mobileMenuRef.current.contains(event.target)
//       ) {
//         setIsMobileMenuOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [mobileMenuRef]);

//   // Updated text color logic to include "/agro-advisory"
//   const textColorClass =
//     location.pathname === "/" ||
//     location.pathname === "/market-page" ||
//     location.pathname === "/agro-advisory"
//       ? "text-white"
//       : "text-blue-900";

//   return (
//     <header
//       className="fixed top-0 left-1/2 transform -translate-x-1/2 w-[100%] md:w-full p-1 md:p-2 z-10
//         bg-white/20
//         backdrop-blur-[100px]
//         border border-white/30
//         shadow-[0_4px_30px_rgba(0,0,0,0.1)]
//         rounded-full mt-1"
//       style={{ maxWidth: "1400px" }}
//     >
//       <div className="container mx-auto flex items-center justify-between">
//         <div className="flex items-center space-x-2 mb-0 md:mb-0">
//           <Link to="/">
//             <img
//               src={logo2}
//               alt="agropulse logo"
//               className="h-8 md:h-10 rounded-lg p-1"
//             />
//           </Link>
//         </div>
//         {/* Mobile menu button */}
//         <div className="flex items-center lg:hidden">
//           <button
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             className="p-2"
//           >
//             <FaBars className="h-6 w-6 text-blue-600" />
//           </button>
//         </div>
//         {/* Desktop Navbar Links */}
//         <div
//           className={`hidden ${textColorClass} lg:flex align-middle items-center justify-center flex-1 space-x-8`}
//         >
//           <Link
//             to="/"
//             className={`block px-4 font-semibold text-sm border-b-2 ${
//               location.pathname === "/"
//                 ? "border-blue-600"
//                 : "border-transparent"
//             } hover:border-blue-600 flex flex-row items-center py-2`}
//           >
//             <FaHome className="mb-1 text-2xl mr-2" />
//             <span>Home</span>
//           </Link>

//           <div className="flex flex-row items-center">
//             <FaCloudSun className="mb-1 text-2xl" />
//             <Dropdown
//               links={forecastLinks}
//               title="Weather"
//               className={`block px-4 font-semibold border-b-2 text-sm ${
//                 location.pathname === "/market-page"
//                   ? "border-blue-600"
//                   : "border-transparent"
//               } hover:border-blue-600 flex flex-row items-center py-2`}
//             />
//           </div>

//           <div className="flex flex-row items-center">
//             <FaSeedling className="mb-1 text-2xl" />
//             <Dropdown
//               links={agricultureLinks}
//               title="Agriculture"
//               className={`block px-4 font-semibold border-b-2 text-orange-600 text-sm ${
//                 location.pathname === "/market-page"
//                   ? "border-blue-600"
//                   : "border-transparent"
//               } hover:border-blue-600 flex flex-row items-center py-2`}
//             />
//           </div>

//           <Link
//             to="/market-page"
//             className={`block px-4 font-semibold border-b-2 text-sm ${
//               location.pathname === "/market-page"
//                 ? "border-blue-600"
//                 : "border-transparent"
//             } hover:border-blue-600 flex flex-row items-center py-2`}
//           >
//             <FaShoppingCart className="mb-1 text-2xl mr-2" />
//             <span>Market</span>
//           </Link>

//           <Link
//             to="/agro-advisory"
//             className={`block px-4 font-semibold border-b-2 text-sm ${
//               location.pathname === "/agro-advisory"
//                 ? "border-blue-600"
//                 : "border-transparent"
//             } hover:border-blue-600 flex flex-row items-center py-2`}
//           >
//             <FaComments className="mb-1 text-2xl mr-2" />
//             <span>Agromet Advisory</span>
//           </Link>
//         </div>

//         <div className="hidden lg:flex flex-col border-2 border-gray-100 h-8 mx-4" />

//         <div className="hidden lg:flex flex-col align-middle items-center justify-end flex-2 mx-22">
//           <Dropdown
//             links={gmetLinks.map((link) => ({
//               to: link.href,
//               label: link.label,
//             }))}
//             title="CLIENTELE"
//           />
//         </div>
//         <Link
//           to="/admin-login"
//           className={`hidden lg:flex px-4 font-semibold text-sm border-b-2 ${
//             location.pathname === "/admin"
//               ? "border-blue-600"
//               : "border-transparent"
//           } hover:border-blue-600 flex-row items-center py-2`}
//         >
//           <FaUser className="mb-1 text-2xl mr-2" />
//         </Link>
//       </div>

//       {/* Mobile and Tablet Menu */}
//       {isMobileMenuOpen && (
//         <div
//           className="absolute top-12 left-8 w-11/12
//             bg-white/90
//             backdrop-blur-[100px]
//             border border-white/30
//             shadow-[0_9px_30px_rgba(0,0,0,0.9)]
//             rounded-lg
//             p-4
//             mx-0
//             z-10"
//           ref={mobileMenuRef}
//         >
//           <nav className="flex flex-col text-left space-y-4 py-4">
//             <Link
//               to="/"
//               className="block px-4 py-2 text-blue-900 font-semibold hover:text-blue-800 rounded-md hover:bg-blue-100 transition duration-200 text-sm"
//               onClick={() => setIsMobileMenuOpen(false)}
//             >
//               <FaHome className="inline mr-2" /> Home
//             </Link>
//             <Link
//               to="/market-page"
//               className="block px-4 py-2 text-blue-900 font-semibold hover:text-blue-800 rounded-md hover:bg-blue-100 transition duration-200 text-sm"
//               onClick={() => setIsMobileMenuOpen(false)}
//             >
//               <FaShoppingCart className="inline mr-2" /> Market
//             </Link>

//             <Link
//               to="/agro-advisory"
//               className="block px-4 py-2 text-blue-900 font-semibold hover:text-blue-800 rounded-md hover:bg-blue-100 transition duration-200 text-sm"
//               onClick={() => setIsMobileMenuOpen(false)}
//             >
//               <FaComments className="inline mr-2" /> Agromet Advisory
//             </Link>

//             {/* Mobile Dropdown for Weather */}
//             <div>
//               <button
//                 className="block w-full px-4 py-2 text-blue-900 font-semibold hover:text-blue-800 rounded-md hover:bg-blue-100 transition duration-200 text-left text-sm"
//                 onClick={() =>
//                   setOpenDropdown(
//                     openDropdown === "forecast" ? null : "forecast"
//                   )
//                 }
//               >
//                 <FaCloudSun className="inline mr-2" /> Weather{" "}
//                 <FaChevronDown className="inline ml-1" />
//               </button>
//               {openDropdown === "forecast" && (
//                 <div className="pl-6 py-2">
//                   {forecastLinks.map((link) => (
//                     <Link
//                       key={link.to}
//                       to={link.to}
//                       className="block px-4 py-2 text-gray-700 hover:text-blue-800 rounded-md hover:bg-blue-100 transition duration-200 text-sm"
//                       onClick={() => {
//                         setIsMobileMenuOpen(false);
//                         setOpenDropdown(null);
//                       }}
//                     >
//                       {link.label}
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </div>

//             {/* Mobile Dropdown for Agriculture */}
//             <div>
//               <button
//                 className="block w-full px-4 py-2 text-blue-900 font-semibold hover:text-blue-800 rounded-md hover:bg-blue-100 transition duration-200 text-left text-sm"
//                 onClick={() =>
//                   setOpenDropdown(
//                     openDropdown === "agriculture" ? null : "agriculture"
//                   )
//                 }
//               >
//                 <FaSeedling className="inline mr-2" /> Agriculture{" "}
//                 <FaChevronDown className="inline ml-1" />
//               </button>
//               {openDropdown === "agriculture" && (
//                 <div className="pl-6 py-2">
//                   {agricultureLinks.map((link) => (
//                     <Link
//                       key={link.to}
//                       to={link.to}
//                       className="block px-4 py-2 text-gray-700 hover:text-blue-800 rounded-md hover:bg-blue-100 transition duration-200 text-sm"
//                       onClick={() => {
//                         setIsMobileMenuOpen(false);
//                         setOpenDropdown(null);
//                       }}
//                     >
//                       {link.label}
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </div>

//             {/* Mobile Dropdown for GMet-GhAAP */}
//             <div>
//               <button
//                 className="block w-full px-4 py-2 text-blue-900 font-semibold hover:text-blue-800 rounded-md hover:bg-blue-100 transition duration-200 text-left text-sm"
//                 onClick={() =>
//                   setOpenDropdown(openDropdown === "gmet" ? null : "gmet")
//                 }
//               >
//                 Clientele <FaChevronDown className="inline ml-1" />
//               </button>
//               {openDropdown === "gmet" && (
//                 <div className="pl-6 py-2">
//                   {gmetLinks.map((link) => (
//                     <a
//                       key={link.href}
//                       href={link.href}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="block px-4 py-2 text-gray-700 hover:text-blue-800 rounded-md hover:bg-blue-100 transition duration-200 text-sm"
//                       onClick={() => setIsMobileMenuOpen(false)}
//                     >
//                       {link.label}
//                     </a>
//                   ))}
//                 </div>
//               )}
//             </div>
//             <Link
//               to="/admin-login"
//               className="block px-4 py-2 text-blue-900 font-semibold hover:text-blue-800 rounded-md hover:bg-blue-100 transition duration-200 text-sm"
//               onClick={() => {
//                 setIsMobileMenuOpen(false);
//               }}
//             >
//               <FaUser className="inline mr-2" /> Admin
//             </Link>
//           </nav>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;

// import { useState, useEffect, useRef } from "react";
// import {
//   FaHome,
//   FaBars,
//   FaChevronDown,
//   FaShoppingCart,
//   FaSeedling,
//   FaCloudSun,
//   FaComments,
//   FaUser,
//   FaImage, // Added for Media icon
// } from "react-icons/fa";
// import { Link, useLocation } from "react-router-dom";
// import PropTypes from "prop-types";
// import logo2 from "../assets/images/ddt_log.png";

// // Dropdown Component
// const Dropdown = ({ links, title }) => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const dropdownRef = useRef(null);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsDropdownOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [dropdownRef]);

//   return (
//     <div
//       className="relative"
//       onMouseEnter={() => setIsDropdownOpen(true)}
//       onMouseLeave={() => setIsDropdownOpen(false)}
//       ref={dropdownRef}
//     >
//       <button className="block px-4 text-gray-50 font-semibold border-b-1 border-transparent hover:border-blue-600 text-sm">
//         {title} <FaChevronDown className="inline ml-2" />
//       </button>

//       {isDropdownOpen && (
//         <div
//           className="absolute left-0 z-10 w-48 bg-white/100 backdrop-blur-md border border-white/30 rounded-md shadow-lg"
//           style={{ top: "100%" }}
//         >
//           <ul className="py-1">
//             {links.map((link) => (
//               <li key={link.to}>
//                 <Link
//                   to={link.to}
//                   className="block p-2 text-blue-600 hover:bg-gray-200 transition duration-200 text-sm"
//                   onClick={() => setIsDropdownOpen(false)}
//                 >
//                   {link.label}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// Dropdown.propTypes = {
//   links: PropTypes.arrayOf(
//     PropTypes.shape({
//       to: PropTypes.string.isRequired,
//       label: PropTypes.string.isRequired,
//     })
//   ).isRequired,
//   title: PropTypes.string.isRequired,
// };

// const Header = () => {
//   const location = useLocation();
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [openDropdown, setOpenDropdown] = useState(null);
//   const mobileMenuRef = useRef(null);

//   const forecastLinks = [
//     { to: "/5-days-forecast", label: "5 Days Forecast" },
//     { to: "/7-days-forecast", label: "7 Days Forecast" },
//     { to: "/agro-bulletins", label: "Agrometeorological Bulletins" },
//     { to: "/flood-drought", label: "Flood and Drought Bulletins" },
//     { to: "/subseasonal-forecast", label: "Subseasonal 2 Seasonal Forecast" },
//     { to: "/monthly-forecast", label: "Monthly Forecast" },
//     { to: "/seasonal-forecast", label: "Seasonal Forecast" },
//     { to: "/climate-report", label: "State of the Climate Report 2023" },
//   ];

//   const agricultureLinks = [
//     { to: "/crop-calendar", label: "Crop Calendar" },
//     { to: "/poultry-calendar", label: "Poultry Calendar" },
//     { to: "/crop-advisory", label: "Crop Advisories" },
//     { to: "/poultry-advisory", label: "Poultry Advisories" },
//   ];

//   const gmetLinks = [
//     {
//       href: "https://mofa.gov.gh/site/",
//       label: "Ministry of Food and Agriculture",
//     },
//     {
//       href: "https://www.fsrp.org.gh/",
//       label: "Food System and Resilience Project (FSRP)",
//     },
//     { href: "https://www.meteo.gov.gh/", label: "Ghana Meteorological Agency" },
//   ];

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (
//         mobileMenuRef.current &&
//         !mobileMenuRef.current.contains(event.target)
//       ) {
//         setIsMobileMenuOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [mobileMenuRef]);

//   // Updated text color logic to include "/media" path
//   const textColorClass =
//     location.pathname === "/" ||
//     location.pathname === "/market-page" ||
//     location.pathname === "/agro-advisory" ||
//     location.pathname === "/media"
//       ? "text-white"
//       : "text-blue-900";

//   return (
//     <header
//       className="fixed top-0 left-1/2 transform -translate-x-1/2 w-[100%] md:w-full p-1 md:p-2 z-10
//         bg-white/20
//         backdrop-blur-[100px]
//         border border-white/30
//         shadow-[0_4px_30px_rgba(0,0,0,0.1)]
//         rounded-full mt-1"
//       style={{ maxWidth: "1400px" }}
//     >
//       <div className="container mx-auto flex items-center justify-between">
//         <div className="flex items-center space-x-2 mb-0 md:mb-0">
//           <Link to="/">
//             <img
//               src={logo2}
//               alt="agropulse logo"
//               className="h-8 md:h-10 rounded-lg p-1"
//             />
//           </Link>
//         </div>
//         {/* Mobile menu button */}
//         <div className="flex items-center lg:hidden">
//           <button
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             className="p-2"
//           >
//             <FaBars className="h-6 w-6 text-blue-600" />
//           </button>
//         </div>
//         {/* Desktop Navbar Links */}
//         <div
//           className={`hidden ${textColorClass} lg:flex align-middle items-center justify-center flex-1 space-x-8`}
//         >
//           <Link
//             to="/"
//             className={`block px-4 font-semibold text-sm border-b-2 ${
//               location.pathname === "/"
//                 ? "border-blue-600"
//                 : "border-transparent"
//             } hover:border-blue-600 flex flex-row items-center py-2`}
//           >
//             <FaHome className="mb-1 text-2xl mr-2" />
//             <span>Home</span>
//           </Link>

//           <div className="flex flex-row items-center">
//             <FaCloudSun className="mb-1 text-2xl" />
//             <Dropdown
//               links={forecastLinks}
//               title="Weather"
//               className={`block px-4 font-semibold border-b-2 text-sm ${
//                 location.pathname === "/market-page"
//                   ? "border-blue-600"
//                   : "border-transparent"
//               } hover:border-blue-600 flex flex-row items-center py-2`}
//             />
//           </div>

//           <div className="flex flex-row items-center">
//             <FaSeedling className="mb-1 text-2xl" />
//             <Dropdown
//               links={agricultureLinks}
//               title="Agriculture"
//               className={`block px-4 font-semibold border-b-2 text-orange-600 text-sm ${
//                 location.pathname === "/market-page"
//                   ? "border-blue-600"
//                   : "border-transparent"
//               } hover:border-blue-600 flex flex-row items-center py-2`}
//             />
//           </div>

//           <Link
//             to="/market-page"
//             className={`block px-4 font-semibold border-b-2 text-sm ${
//               location.pathname === "/market-page"
//                 ? "border-blue-600"
//                 : "border-transparent"
//             } hover:border-blue-600 flex flex-row items-center py-2`}
//           >
//             <FaShoppingCart className="mb-1 text-2xl mr-2" />
//             <span>Market</span>
//           </Link>

//           <Link
//             to="/agro-advisory"
//             className={`block px-4 font-semibold border-b-2 text-sm ${
//               location.pathname === "/agro-advisory"
//                 ? "border-blue-600"
//                 : "border-transparent"
//             } hover:border-blue-600 flex flex-row items-center py-2`}
//           >
//             <FaComments className="mb-1 text-2xl mr-2" />
//             <span>Agromet Advisory</span>
//           </Link>

//           {/* New Media Link for Desktop */}
//           <Link
//             to="/media-page"
//             className={`block px-4 font-semibold border-b-2 text-sm ${
//               location.pathname === "/media"
//                 ? "border-blue-600"
//                 : "border-transparent"
//             } hover:border-blue-600 flex flex-row items-center py-2`}
//           >
//             <FaImage className="mb-1 text-2xl mr-2" />
//             <span>Media</span>
//           </Link>
//         </div>

//         <div className="hidden lg:flex flex-col border-2 border-gray-100 h-8 mx-4" />

//         <div className="hidden lg:flex flex-col align-middle items-center justify-end flex-2 mx-22">
//           <Dropdown
//             links={gmetLinks.map((link) => ({
//               to: link.href,
//               label: link.label,
//             }))}
//             title="CLIENTELE"
//           />
//         </div>
//         <Link
//           to="/admin-login"
//           className={`hidden lg:flex px-4 font-semibold text-sm border-b-2 ${
//             location.pathname === "/admin"
//               ? "border-blue-600"
//               : "border-transparent"
//           } hover:border-blue-600 flex-row items-center py-2`}
//         >
//           <FaUser className="mb-1 text-2xl mr-2" />
//         </Link>
//       </div>

//       {/* Mobile and Tablet Menu */}
//       {isMobileMenuOpen && (
//         <div
//           className="absolute top-12 left-8 w-11/12
//             bg-white/90
//             backdrop-blur-[100px]
//             border border-white/30
//             shadow-[0_9px_30px_rgba(0,0,0,0.9)]
//             rounded-lg
//             p-4
//             mx-0
//             z-10"
//           ref={mobileMenuRef}
//         >
//           <nav className="flex flex-col text-left space-y-4 py-4">
//             <Link
//               to="/"
//               className="block px-4 py-2 text-blue-900 font-semibold hover:text-blue-800 rounded-md hover:bg-blue-100 transition duration-200 text-sm"
//               onClick={() => setIsMobileMenuOpen(false)}
//             >
//               <FaHome className="inline mr-2" /> Home
//             </Link>
//             <Link
//               to="/market-page"
//               className="block px-4 py-2 text-blue-900 font-semibold hover:text-blue-800 rounded-md hover:bg-blue-100 transition duration-200 text-sm"
//               onClick={() => setIsMobileMenuOpen(false)}
//             >
//               <FaShoppingCart className="inline mr-2" /> Market
//             </Link>

//             <Link
//               to="/agro-advisory"
//               className="block px-4 py-2 text-blue-900 font-semibold hover:text-blue-800 rounded-md hover:bg-blue-100 transition duration-200 text-sm"
//               onClick={() => setIsMobileMenuOpen(false)}
//             >
//               <FaComments className="inline mr-2" /> Agromet Advisory
//             </Link>

//             {/* New Media Link for Mobile */}
//             <Link
//               to="/media-page"
//               className="block px-4 py-2 text-blue-900 font-semibold hover:text-blue-800 rounded-md hover:bg-blue-100 transition duration-200 text-sm"
//               onClick={() => setIsMobileMenuOpen(false)}
//             >
//               <FaImage className="inline mr-2" /> Media
//             </Link>

//             {/* Mobile Dropdown for Weather */}
//             <div>
//               <button
//                 className="block w-full px-4 py-2 text-blue-900 font-semibold hover:text-blue-800 rounded-md hover:bg-blue-100 transition duration-200 text-left text-sm"
//                 onClick={() =>
//                   setOpenDropdown(
//                     openDropdown === "forecast" ? null : "forecast"
//                   )
//                 }
//               >
//                 <FaCloudSun className="inline mr-2" /> Weather{" "}
//                 <FaChevronDown className="inline ml-1" />
//               </button>
//               {openDropdown === "forecast" && (
//                 <div className="pl-6 py-2">
//                   {forecastLinks.map((link) => (
//                     <Link
//                       key={link.to}
//                       to={link.to}
//                       className="block px-4 py-2 text-gray-700 hover:text-blue-800 rounded-md hover:bg-blue-100 transition duration-200 text-sm"
//                       onClick={() => {
//                         setIsMobileMenuOpen(false);
//                         setOpenDropdown(null);
//                       }}
//                     >
//                       {link.label}
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </div>

//             {/* Mobile Dropdown for Agriculture */}
//             <div>
//               <button
//                 className="block w-full px-4 py-2 text-blue-900 font-semibold hover:text-blue-800 rounded-md hover:bg-blue-100 transition duration-200 text-left text-sm"
//                 onClick={() =>
//                   setOpenDropdown(
//                     openDropdown === "agriculture" ? null : "agriculture"
//                   )
//                 }
//               >
//                 <FaSeedling className="inline mr-2" /> Agriculture{" "}
//                 <FaChevronDown className="inline ml-1" />
//               </button>
//               {openDropdown === "agriculture" && (
//                 <div className="pl-6 py-2">
//                   {agricultureLinks.map((link) => (
//                     <Link
//                       key={link.to}
//                       to={link.to}
//                       className="block px-4 py-2 text-gray-700 hover:text-blue-800 rounded-md hover:bg-blue-100 transition duration-200 text-sm"
//                       onClick={() => {
//                         setIsMobileMenuOpen(false);
//                         setOpenDropdown(null);
//                       }}
//                     >
//                       {link.label}
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </div>

//             {/* Mobile Dropdown for GMet-GhAAP */}
//             <div>
//               <button
//                 className="block w-full px-4 py-2 text-blue-900 font-semibold hover:text-blue-800 rounded-md hover:bg-blue-100 transition duration-200 text-left text-sm"
//                 onClick={() =>
//                   setOpenDropdown(openDropdown === "gmet" ? null : "gmet")
//                 }
//               >
//                 Clientele <FaChevronDown className="inline ml-1" />
//               </button>
//               {openDropdown === "gmet" && (
//                 <div className="pl-6 py-2">
//                   {gmetLinks.map((link) => (
//                     <a
//                       key={link.href}
//                       href={link.href}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="block px-4 py-2 text-gray-700 hover:text-blue-800 rounded-md hover:bg-blue-100 transition duration-200 text-sm"
//                       onClick={() => setIsMobileMenuOpen(false)}
//                     >
//                       {link.label}
//                     </a>
//                   ))}
//                 </div>
//               )}
//             </div>
//             <Link
//               to="/admin-login"
//               className="block px-4 py-2 text-blue-900 font-semibold hover:text-blue-800 rounded-md hover:bg-blue-100 transition duration-200 text-sm"
//               onClick={() => {
//                 setIsMobileMenuOpen(false);
//               }}
//             >
//               <FaUser className="inline mr-2" /> Admin
//             </Link>
//           </nav>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;

import { useState, useEffect, useRef } from "react";
import {
  FaHome,
  FaBars,
  FaChevronDown,
  FaShoppingCart,
  FaSeedling,
  FaCloudSun,
  FaComments,
  FaUser,
  FaImage,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import logo2 from "../assets/images/ddt_log.png";

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
      <button className="block px-3 text-gray-50 font-semibold border-b-1 border-transparent hover:border-blue-600 text-sm whitespace-nowrap">
        {title} <FaChevronDown className="inline ml-1" />
      </button>

      {isDropdownOpen && (
        <div
          className="absolute left-0 z-10 w-52 bg-white/100 backdrop-blur-md border border-white/30 rounded-md shadow-lg"
          style={{ top: "100%" }}
        >
          <ul className="py-1">
            {links.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="block p-2 text-blue-600 hover:bg-gray-200 transition duration-200 text-sm"
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
    { to: "/crop-calendar", label: "Crop Calendar" },
    { to: "/poultry-calendar", label: "Poultry Calendar" },
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

  // Updated text color logic to include "/media-page"
  const textColorClass =
    location.pathname === "/" ||
    location.pathname === "/market-page" ||
    location.pathname === "/agro-advisory" ||
    location.pathname === "/media-page"
      ? "text-white"
      : "text-blue-900";

  return (
    <header
      className="fixed top-0 left-1/2 transform -translate-x-1/2 w-[95%] md:w-[98%] p-1 md:p-2 z-50  
        bg-white/20 
        backdrop-blur-[100px] 
        border border-white/30 
        shadow-[0_4px_30px_rgba(0,0,0,0.1)] 
        rounded-full mt-2"
      style={{ maxWidth: "1600px" }}
    >
      <div className="container mx-auto flex items-center justify-between px-2 md:px-4">
        <div className="flex items-center space-x-2 mb-0 md:mb-0">
          <Link to="/">
            <img
              src={logo2}
              alt="agropulse logo"
              className="h-8 md:h-10 rounded-lg p-1"
            />
          </Link>
        </div>
        {/* Mobile menu button */}
        <div className="flex items-center lg:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2"
          >
            <FaBars className="h-6 w-6 text-blue-600" />
          </button>
        </div>
        {/* Desktop Navbar Links */}
        <div
          className={`hidden ${textColorClass} lg:flex align-middle items-center justify-center flex-1 space-x-4 xl:space-x-6`}
        >
          <Link
            to="/"
            className={`block px-3 font-semibold text-sm border-b-2 ${
              location.pathname === "/"
                ? "border-blue-600"
                : "border-transparent"
            } hover:border-blue-600 flex flex-row items-center py-2`}
          >
            <FaHome className="mb-1 text-xl mr-1" />
            <span>Home</span>
          </Link>

          <div className="flex flex-row items-center">
            <FaCloudSun className="mb-1 text-xl mr-1" />
            <Dropdown
              links={forecastLinks}
              title="Weather"
              className={`block px-3 font-semibold border-b-2 text-sm ${
                forecastLinks.some((link) => location.pathname === link.to)
                  ? "border-blue-600"
                  : "border-transparent"
              } hover:border-blue-600 flex flex-row items-center py-2`}
            />
          </div>

          <div className="flex flex-row items-center">
            <FaSeedling className="mb-1 text-xl mr-1" />
            <Dropdown
              links={agricultureLinks}
              title="Agriculture"
              className={`block px-3 font-semibold border-b-2 text-sm ${
                agricultureLinks.some((link) => location.pathname === link.to)
                  ? "border-blue-600"
                  : "border-transparent"
              } hover:border-blue-600 flex flex-row items-center py-2`}
            />
          </div>

          <Link
            to="/market-page"
            className={`block px-3 font-semibold border-b-2 text-sm whitespace-nowrap ${
              location.pathname === "/market-page"
                ? "border-blue-600"
                : "border-transparent"
            } hover:border-blue-600 flex flex-row items-center py-2`}
          >
            <FaShoppingCart className="mb-1 text-xl mr-1" />
            <span>Market</span>
          </Link>

          <Link
            to="/agro-advisory"
            className={`block px-3 font-semibold border-b-2 text-sm whitespace-nowrap ${
              location.pathname === "/agro-advisory"
                ? "border-blue-600"
                : "border-transparent"
            } hover:border-blue-600 flex flex-row items-center py-2`}
          >
            <FaComments className="mb-1 text-xl mr-1" />
            <span>Agromet Advisory</span>
          </Link>

          {/* Media Link for Desktop */}
          <Link
            to="/media-page"
            className={`block px-3 font-semibold border-b-2 text-sm whitespace-nowrap ${
              location.pathname === "/media-page"
                ? "border-blue-600"
                : "border-transparent"
            } hover:border-blue-600 flex flex-row items-center py-2`}
          >
            <FaImage className="mb-1 text-xl mr-1" />
            <span>Media</span>
          </Link>
        </div>

        <div className="hidden lg:flex flex-col border-2 border-gray-100 h-8 mx-2" />

        <div className="hidden lg:flex flex-col align-middle items-center justify-end mx-2">
          <Dropdown
            links={gmetLinks.map((link) => ({
              to: link.href,
              label: link.label,
            }))}
            title="CLIENTELE"
          />
        </div>
        <Link
          to="/admin-login"
          className={`hidden lg:flex px-3 font-semibold text-sm border-b-2 ${
            location.pathname === "/admin"
              ? "border-blue-600"
              : "border-transparent"
          } hover:border-blue-600 flex-row items-center py-2`}
        >
          <FaUser className="mb-1 text-xl" />
        </Link>
      </div>

      {/* Mobile and Tablet Menu */}
      {isMobileMenuOpen && (
        <div
          className="absolute top-12 right-0 w-full md:w-3/4 md:right-0 
            bg-white/95 
            backdrop-blur-[100px] 
            border border-white/30 
            shadow-[0_9px_30px_rgba(0,0,0,0.9)]
            rounded-lg 
            p-4 
            mx-0 
            z-10"
          ref={mobileMenuRef}
        >
          <nav className="flex flex-col text-left space-y-3 py-2">
            <Link
              to="/"
              className="block px-4 py-2 text-blue-900 font-semibold hover:text-blue-800 rounded-md hover:bg-blue-100 transition duration-200 text-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <FaHome className="inline mr-2" /> Home
            </Link>
            <Link
              to="/market-page"
              className="block px-4 py-2 text-blue-900 font-semibold hover:text-blue-800 rounded-md hover:bg-blue-100 transition duration-200 text-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <FaShoppingCart className="inline mr-2" /> Market
            </Link>

            <Link
              to="/agro-advisory"
              className="block px-4 py-2 text-blue-900 font-semibold hover:text-blue-800 rounded-md hover:bg-blue-100 transition duration-200 text-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <FaComments className="inline mr-2" /> Agromet Advisory
            </Link>

            {/* Media Link for Mobile */}
            <Link
              to="/media-page"
              className="block px-4 py-2 text-blue-900 font-semibold hover:text-blue-800 rounded-md hover:bg-blue-100 transition duration-200 text-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <FaImage className="inline mr-2" /> Media
            </Link>

            {/* Mobile Dropdown for Weather */}
            <div>
              <button
                className="block w-full px-4 py-2 text-blue-900 font-semibold hover:text-blue-800 rounded-md hover:bg-blue-100 transition duration-200 text-left text-sm"
                onClick={() =>
                  setOpenDropdown(
                    openDropdown === "forecast" ? null : "forecast"
                  )
                }
              >
                <FaCloudSun className="inline mr-2" /> Weather{" "}
                <FaChevronDown className="inline ml-1" />
              </button>
              {openDropdown === "forecast" && (
                <div className="pl-6 py-1 ml-2 border-l-2 border-blue-200">
                  {forecastLinks.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      className="block px-4 py-2 text-gray-700 hover:text-blue-800 rounded-md hover:bg-blue-100 transition duration-200 text-sm"
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
                className="block w-full px-4 py-2 text-blue-900 font-semibold hover:text-blue-800 rounded-md hover:bg-blue-100 transition duration-200 text-left text-sm"
                onClick={() =>
                  setOpenDropdown(
                    openDropdown === "agriculture" ? null : "agriculture"
                  )
                }
              >
                <FaSeedling className="inline mr-2" /> Agriculture{" "}
                <FaChevronDown className="inline ml-1" />
              </button>
              {openDropdown === "agriculture" && (
                <div className="pl-6 py-1 ml-2 border-l-2 border-blue-200">
                  {agricultureLinks.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      className="block px-4 py-2 text-gray-700 hover:text-blue-800 rounded-md hover:bg-blue-100 transition duration-200 text-sm"
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
                className="block w-full px-4 py-2 text-blue-900 font-semibold hover:text-blue-800 rounded-md hover:bg-blue-100 transition duration-200 text-left text-sm"
                onClick={() =>
                  setOpenDropdown(openDropdown === "gmet" ? null : "gmet")
                }
              >
                Clientele <FaChevronDown className="inline ml-1" />
              </button>
              {openDropdown === "gmet" && (
                <div className="pl-6 py-1 ml-2 border-l-2 border-blue-200">
                  {gmetLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2 text-gray-700 hover:text-blue-800 rounded-md hover:bg-blue-100 transition duration-200 text-sm"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
            <Link
              to="/admin-login"
              className="block px-4 py-2 text-blue-900 font-semibold hover:text-blue-800 rounded-md hover:bg-blue-100 transition duration-200 text-sm"
              onClick={() => {
                setIsMobileMenuOpen(false);
              }}
            >
              <FaUser className="inline mr-2" /> Admin
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
