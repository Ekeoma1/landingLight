import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import profileImg from "../assets/images/cardi.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(true);

  const toggleMobileNav = () => {
    setMobileNav(!mobileNav);
  };
  return (
    <nav>
      {/* <div className="container"> */}
      <div className="d-flex  flex-wrap nav-menu justify-content-end align-items-end gap-lg-5 gap-3 mt-">
        <div className="d-lg-block d-none">
          <Link to="#">TRIPS</Link>
        </div>
        <div className="d-lg-block d-none">
          <Link to="#">RECENTLY VIEWED</Link>
        </div>
        <div className="d-lg-block d-none">
          <Link to="#">BOOKINGS</Link>
        </div>
        <button
          onClick={toggleMobileNav}
          className={`d-lg-none ${!mobileNav && "d-none"}`}
        >
          <MenuIcon />
        </button>
        <button
          onClick={toggleMobileNav}
          className={`d-lg-none ${mobileNav && "d-none"}`}
        >
          <CloseIcon />
        </button>
        <div
          style={{ backgroundImage: `url(${profileImg})` }}
          className="profile-image"
        ></div>
      </div>
      {/* </div> */}
      <div className={`mobile-nav d-lg-none  ${mobileNav && "d-none"}`}>
        <div className="d-grid gap-2">
          <div>
            <Link to="#">TRIPS</Link>
          </div>
          <div>
            <Link to="#">RECENTLY VIEWED</Link>
          </div>
          <div>
            <Link to="#">BOOKINGS</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
