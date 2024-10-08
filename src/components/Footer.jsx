// import logo from "../assets/images/ghaaplogo.png";

// const Footer = () => {
//   return (
//     <footer className="bg-blue-900 text-white w-full py-4 md:py-6 md:px-12">
//       <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
//         <div className="flex flex-col items-center md:items-start">
//           <img src={logo} alt="Ghaap logo" className="h-16 mb-2" />

//           <p className="text-sm text-gray-300 text-center md:text-left">
//             GhAAP is committed to providing top-notch solutions that drive
//             business success. Stay connected and discover more about our
//             services.
//           </p>
//         </div>

//         {/* Navigation Links */}
//         <div className="flex flex-col items-center md:items-center">
//           <h5 className="font-semibold mb-2 text-lg text-gray-100">
//             Quick Links
//           </h5>
//           <ul className="space-y-1 text-sm text-gray-300">
//             <li>
//               <a href="/about" className="hover:text-gray-400">
//                 About Us
//               </a>
//             </li>
//             <li>
//               <a href="/services" className="hover:text-gray-400">
//                 Our Services
//               </a>
//             </li>
//             <li>
//               <a href="/contact" className="hover:text-gray-400">
//                 Contact
//               </a>
//             </li>
//             <li>
//               <a href="/careers" className="hover:text-gray-400">
//                 Careers
//               </a>
//             </li>
//           </ul>
//         </div>

//         {/* Social Media and Legal */}
//         <div className="flex flex-col items-center md:items-start">
//           <h5 className="font-semibold mb-2 text-lg text-gray-100">
//             Connect With Us
//           </h5>
//           <div className="flex space-x-4 mb-2">
//             <a href="#" className="hover:text-gray-400" aria-label="Facebook">
//               <i className="fab fa-facebook h-6 w-6"></i>
//             </a>
//             <a href="#" className="hover:text-gray-400" aria-label="Twitter">
//               <i className="fab fa-twitter h-6 w-6"></i>
//             </a>
//             <a href="#" className="hover:text-gray-400" aria-label="LinkedIn">
//               <i className="fab fa-linkedin h-6 w-6"></i>
//             </a>
//           </div>
//           <ul className="text-sm space-y-1 text-gray-300">
//             <li>
//               <a href="/privacy" className="hover:text-gray-400">
//                 Privacy Policy
//               </a>
//             </li>
//             <li>
//               <a href="/terms" className="hover:text-gray-400">
//                 Terms of Service
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>

//       <div className="mt-4 border-t border-gray-600 pt-2 text-xs text-gray-400 flex justify-center">
//         <p>&copy; 2024 GhAAP. All rights reserved.</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import logo from "../assets/images/ghaaplogo.png";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white w-full py-4 md:py-6 md:px-12">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {/* Logo and Description */}
        <div className="flex flex-col items-center md:items-start">
          {/* Link the logo to the website */}
          <a
            href="https://ghaap.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={logo} alt="Ghaap logo" className="h-16 mb-2" />
          </a>

          <p className="text-sm text-gray-300 text-center md:text-left">
            GhAAP is committed to providing top-notch solutions that drive
            business success. Stay connected and discover more about our
            services.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col items-center md:items-center">
          <h5 className="font-semibold mb-2 text-lg text-gray-100">
            Quick Links
          </h5>
          <ul className="space-y-1 text-sm text-gray-300">
            <li>
              <a href="/about" className="hover:text-gray-400">
                About Us
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-gray-400">
                Our Services
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-gray-400">
                Contact
              </a>
            </li>
            <li>
              <a href="/careers" className="hover:text-gray-400">
                Careers
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media and Legal */}
        <div className="flex flex-col items-center md:items-start">
          <h5 className="font-semibold mb-2 text-lg text-gray-100">
            Connect With Us
          </h5>
          <div className="flex space-x-4 mb-2">
            <a href="#" className="hover:text-gray-400" aria-label="Facebook">
              <i className="fab fa-facebook h-6 w-6"></i>
            </a>
            <a href="#" className="hover:text-gray-400" aria-label="Twitter">
              <i className="fab fa-twitter h-6 w-6"></i>
            </a>
            <a href="#" className="hover:text-gray-400" aria-label="LinkedIn">
              <i className="fab fa-linkedin h-6 w-6"></i>
            </a>
          </div>
          <ul className="text-sm space-y-1 text-gray-300">
            <li>
              <a href="/privacy" className="hover:text-gray-400">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms" className="hover:text-gray-400">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-4 border-t border-gray-600 pt-2 text-xs text-gray-400 flex justify-center">
        <p>&copy; 2024 GhAAP. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
