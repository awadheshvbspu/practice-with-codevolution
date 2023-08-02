import React, { useState } from 'react';
import './sidebar.css';

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
      <button className="toggle-button" onClick={toggleSidebar}>
        <span className="toggle-icon"></span>
      </button>
      <nav className="sidebar-nav">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;



// //import useState hook to create menu collapse state
// import React, { useState } from "react";
// import "./sidebar.css";
// import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
// import { FaList, FaRegHeart } from "react-icons/fa";
// import {
//   FiHome,
//   FiLogOut,
//   FiArrowLeftCircle,
//   FiArrowRightCircle,
// } from "react-icons/fi";
// import { RiPencilLine } from "react-icons/ri";
// import { BiCog } from "react-icons/bi";

// // import "react-pro-sidebar/dist/css/styles.css";

// const Header = () => {
//   const [menuCollapse, setMenuCollapse] = useState(false);
//   const menuIconClick = () => {
//     menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
//   };

//   return (
//     <>
//       <div id="header">
       
//         <Sidebar collapsed={menuCollapse}>
//           <div className="Sidebar-header">
//             <div className="logotext">
//               <p>{menuCollapse ? "Logo" : "Big Logo"}</p>
//             </div>
//             <div className="closemenu" onClick={menuIconClick}>
//               {menuCollapse ? <FiArrowRightCircle /> : <FiArrowLeftCircle />}
//             </div>
//           </div>
//           <div className="sidebar-content">
//             <Menu iconShape="square">
//               <MenuItem active={true} icon={<FiHome />}>
//                 Home
//               </MenuItem>
//               <MenuItem icon={<FaList />}>Category</MenuItem>
//               <MenuItem icon={<FaRegHeart />}>Favourite</MenuItem>
//               <MenuItem icon={<RiPencilLine />}>Author</MenuItem>
//               <MenuItem icon={<BiCog />}>Settings</MenuItem>
//             </Menu>
//           </div>
//         </Sidebar>
//       </div>
//     </>
//   );
// };

// export default Header;
