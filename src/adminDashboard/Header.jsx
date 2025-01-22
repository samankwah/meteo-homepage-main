// import React from "react";
// import {
//   BsFillBellFill,
//   BsFillEnvelopeFill,
//   BsPersonCircle,
//   BsSearch,
//   BsJustify,
// } from "react-icons/bs";

// function Header({ OpenSidebar }) {
//   return (
//     <header className="header">
//       <div className="menu-icon">
//         <BsJustify className="icon" onClick={OpenSidebar} />
//       </div>
//       <div className="header-left">
//         <BsSearch className="icon" />
//       </div>
//       <div className="header-right">
//         <BsFillBellFill className="icon" />
//         <BsFillEnvelopeFill className="icon" />
//         <BsPersonCircle className="icon" />
//       </div>
//     </header>
//   );
// }

// export default Header;

import React from "react";
import PropTypes from "prop-types"; // Import PropTypes
import {
  BsFillBellFill,
  BsFillEnvelopeFill,
  BsPersonCircle,
  BsSearch,
  BsJustify,
} from "react-icons/bs";

function Header({ OpenSidebar }) {
  return (
    <header className="header">
      <div className="menu-icon">
        <BsJustify className="icon" onClick={OpenSidebar} />
      </div>
      <div className="header-left">
        <BsSearch className="icon" />
      </div>
      <div className="header-right">
        <BsFillBellFill className="icon" />
        <BsFillEnvelopeFill className="icon" />
        <BsPersonCircle className="icon" />
      </div>
    </header>
  );
}

// Define PropTypes
Header.propTypes = {
  OpenSidebar: PropTypes.func.isRequired, // Validates OpenSidebar as a required function
};

export default Header;
