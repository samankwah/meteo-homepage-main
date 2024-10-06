// // import { Search } from "lucide-react";
// // import facebook from "../assets/icons/facebook.png";
// // import linkedIn from "../assets/icons/linkedin.png";
// // import xTwitter from "../assets/icons/x.png";
// // import youTube from "../assets/icons/youtube.png";
// // import whatsapp from "../assets/icons/whatsapp.png";
// // import logo2 from "../assets/images/mofalog.png";
// // import logo3 from "../assets/images/fsrp.png";
// // import logo4 from "../assets/images/gmetlogo.jpg";
// // const Header = () => {
// //   return (
// //     <header className="bg-white fixed top-0 left-0 w-full p-4 flex flex-col md:flex-row justify-between items-center z-50 shadow-md">
// //       <div className="flex items-center space-x-4 mb-2 md:mb-0 md:ml-0">
// //         <img src={logo2} alt="Mofa logo" className="h-12 md:h-16" />
// //         <img src={logo3} alt="Fsrp logo" className="h-12 md:h-16" />
// //         <img src={logo4} alt="GMet logo" className="h-12 md:h-16" />
// //       </div>
// //       <nav className="space-x-2 md:space-x-4 text-sm">
// //         <div className="flex justify-center md:justify-end space-x-2 md:space-x-4 my-4">
// //           <a href="#">
// //             <img
// //               src={facebook}
// //               alt="Facebook"
// //               className="h-5 w-5 md:h-6 md:w-6"
// //             />
// //           </a>
// //           <a href="#">
// //             <img
// //               src={linkedIn}
// //               alt="LinkedIn"
// //               className="h-5 w-5 md:h-6 md:w-6"
// //             />
// //           </a>
// //           <a href="#">
// //             <img
// //               src={xTwitter}
// //               alt="XTwitter"
// //               className="h-5 w-5 md:h-6 md:w-6"
// //             />
// //           </a>
// //           <a href="#">
// //             <img
// //               src={youTube}
// //               alt="YouTube"
// //               className="h-5 w-5 md:h-6 md:w-6"
// //             />
// //           </a>
// //           <a href="#">
// //             <img
// //               src={whatsapp}
// //               alt="whatsapp"
// //               className="h-5 w-5 md:h-6 md:w-6"
// //             />
// //           </a>
// //           <Search className="inline-block w-4 h-4 text-blue-600" />
// //         </div>
// //       </nav>
// //     </header>
// //   );
// // };

// // export default Header;

// import { Search } from "lucide-react";
// import facebook from "../assets/icons/facebook.png";
// import linkedIn from "../assets/icons/linkedin.png";
// import xTwitter from "../assets/icons/x.png";
// import youTube from "../assets/icons/youtube.png";
// import whatsapp from "../assets/icons/whatsapp.png";
// import logo2 from "../assets/images/mofalog.png";
// import logo3 from "../assets/images/fsrp.png";
// import logo4 from "../assets/images/gmetlogo.jpg";
// import { Link } from "react-router-dom"; // Assuming you're using react-router for navigation

// const Header = () => {
//   return (
//     <header className="bg-white fixed top-0 left-0 w-full p-2 md:p-3 flex flex-col md:flex-row justify-between items-center z-50 shadow-md">
//       <div className="flex items-center space-x-2 mb-2 md:mb-0 md:ml-0">
//         <Link to="/">
//           <img src={logo2} alt="Mofa logo" className="h-10 md:h-12" />
//         </Link>
//         <Link to="/">
//           <img src={logo3} alt="Fsrp logo" className="h-10 md:h-12" />
//         </Link>
//         <Link to="/">
//           <img src={logo4} alt="GMet logo" className="h-10 md:h-12" />
//         </Link>
//       </div>
//       <nav className="space-x-2 md:space-x-4 text-sm">
//         <div className="flex justify-center md:justify-end space-x-2 md:space-x-4 my-2">
//           <a href="#">
//             <img
//               src={facebook}
//               alt="Facebook"
//               className="h-4 w-4 md:h-5 md:w-5"
//             />
//           </a>
//           <a href="#">
//             <img
//               src={linkedIn}
//               alt="LinkedIn"
//               className="h-4 w-4 md:h-5 md:w-5"
//             />
//           </a>
//           <a href="#">
//             <img
//               src={xTwitter}
//               alt="XTwitter"
//               className="h-4 w-4 md:h-5 md:w-5"
//             />
//           </a>
//           <a href="#">
//             <img
//               src={youTube}
//               alt="YouTube"
//               className="h-4 w-4 md:h-5 md:w-5"
//             />
//           </a>
//           <a href="#">
//             <img
//               src={whatsapp}
//               alt="whatsapp"
//               className="h-4 w-4 md:h-5 md:w-5"
//             />
//           </a>
//           <Search className="inline-block w-4 h-4 text-blue-600" />
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;

import { Search } from "lucide-react";
import facebook from "../assets/icons/facebook.png";
import linkedIn from "../assets/icons/linkedin.png";
import xTwitter from "../assets/icons/x.png";
import youTube from "../assets/icons/youtube.png";
import whatsapp from "../assets/icons/whatsapp.png";
import logo2 from "../assets/images/mofalog.png";
import logo3 from "../assets/images/fsrp.png";
import logo4 from "../assets/images/gmetlogo.jpg";
import { Link } from "react-router-dom"; // Assuming you're using react-router for navigation

const Header = () => {
  return (
    <header className="bg-white fixed top-0 left-0 w-full p-2 md:p-3 flex flex-col md:flex-row justify-between items-center z-50 shadow-md">
      <div className="flex items-center justify-center space-x-2 mb-2 md:mb-0 md:ml-0">
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
      <nav className="flex items-center justify-center space-x-2 md:space-x-4 text-sm">
        <div className="flex justify-center space-x-2 md:space-x-4 my-2">
          <a href="#">
            <img
              src={facebook}
              alt="Facebook"
              className="h-4 w-4 md:h-5 md:w-5"
            />
          </a>
          <a href="#">
            <img
              src={linkedIn}
              alt="LinkedIn"
              className="h-4 w-4 md:h-5 md:w-5"
            />
          </a>
          <a href="#">
            <img
              src={xTwitter}
              alt="XTwitter"
              className="h-4 w-4 md:h-5 md:w-5"
            />
          </a>
          <a href="#">
            <img
              src={youTube}
              alt="YouTube"
              className="h-4 w-4 md:h-5 md:w-5"
            />
          </a>
          <a href="#">
            <img
              src={whatsapp}
              alt="whatsapp"
              className="h-4 w-4 md:h-5 md:w-5"
            />
          </a>
          <Search className="inline-block w-4 h-4 text-blue-600" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
