import React, { useState } from "react";
import "./Header.css";
// import { IoMenu } from "react-icons/io5";
import { RiMenu3Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";

function Header() {
  let [isMenuHide, setIsMenuHide] = useState(true);

  const closeNavbar = () => {
    setIsMenuHide(true);
  };
  return (
    <header className="container-fluid shadow-sm py-1 rounded-bottom">
      <div className="container-xxl">
        <nav className="row navbar navbar-expand-md navbar-light p-0">
          <NavLink to="/" className="col-2 links border-0 p-1">
            <span className="h1">C</span>
            <span className="h5 ">rimpify</span>
          </NavLink>

          <button
            className="p-0 mx-3 navbar-toggler"
            style={{
              width: "30px",
              height: "30px",
              background: "transparent",
              border: "none",
              outline: "none",
              boxShadow: "none",
            }}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded={isMenuHide ? "false" : "true"}
            aria-label="Toggle navigation"
            onClick={() => setIsMenuHide(!isMenuHide)}
          >
            {/* <IoMenu style={{ width: "25px", height: "25px", color: "#27374d" }} /> */}
            {isMenuHide ? (
              <RiMenu3Line
                style={{
                  width: "25px",
                  height: "25px",
                  color: "#27374d",
                }}
              />
            ) : (
              <IoClose
                style={{ width: "25px", height: "25px", color: "#27374d" }}
              />
            )}
          </button>
          <div
            className={`collapse col-9 navbar-collapse ${
              isMenuHide ? " " : "show"
            }`}
            id="navbarNav"
          >
            <ul className="navbar-nav d-flex justify-content-between ms-auto me-4 col-12 col-md-6 col-lg-5  text-center">
              <li className="nav-item text-capitalize h6 my-3">
                <NavLink to="/" className="links p-1" onClick={closeNavbar}>
                  home
                </NavLink>
              </li>
              <li className="nav-item text-capitalize h6 my-3">
                <NavLink
                  to="/services"
                  className="links p-1"
                  onClick={closeNavbar}
                >
                  services
                </NavLink>
              </li>
              <li className="nav-item text-capitalize h6 my-3">
                <NavLink
                  to="/about"
                  className="links p-1"
                  onClick={closeNavbar}
                >
                  about
                </NavLink>
              </li>
              <li className="nav-item text-capitalize h6 my-3">
                <NavLink
                  to="/contact"
                  className="links p-1"
                  onClick={closeNavbar}
                >
                  contact
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
