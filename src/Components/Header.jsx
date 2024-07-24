import React from "react";

import "../App.css";
import logo from "../assets/haraj-logo.png";
import { NavLink } from "react-router-dom";
import { Example } from "./Login&Reg";
import { counterContext } from "../contexts/ActiveTabContexts";
import { useContext } from "react";

const Header = () => {
  const { count, setCount } = useContext(counterContext);
  function ONchange(e) {
    setCount(e.target.value);
  }
  return (
    <>
      <style>
        {`
            .active {
              color: red;
            }
              
          `}
      </style>
      <header
        className="header"
        style={{ backgroundColor: "#D3D3D3", marginBottom: "0px" }}
      >
        <div className="container-fluid" style={{ background: "#dddddd" }}>
          <div className="row align-items-center p-3" id="toprow">
            <div class="scrollbmenu">
              <a href="#home">
                {" "}
                <span className="h6 text-dark">
                  More Sections <i className="fa fa-align-center"></i>
                </span>
              </a>
              <a href="#news">
                <span className="h6 text-dark">Services</span>
              </a>
              <a href="#contact">
                <span className="h6 text-dark">
                  Search <i className="fa fa-search"></i>
                </span>
              </a>
              <a href="#about">
                <span className="h6 text-dark">
                  Furniture <i className="fas fa-couch"></i>
                </span>
              </a>
              <a href="#support">
                <span className="h6 text-dark">Livestock and animals</span>
              </a>
              <a href="#blog">
                {" "}
                <span className="h6 text-dark">Real estates</span>
              </a>
              <a href="#tools">
                <span className="h6 text-dark">
                  Devices <i className="fa fa-mobile-phone"></i>
                </span>
              </a>
              <a href="#base">
                <span className="h6 text-dark">
                  Cars <i className="fas fa-car"></i>
                </span>
              </a>
              <a href="#custom">
                <span className="h6 text-dark">Mains</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <div className="container-fluid">
          <button
            data-mdb-collapse-init
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto pl-4">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <button
                    style={{
                      backgroundColor: "rgb(211, 211, 211)",
                      color: "black",
                    }}
                    className="btn btn-secondary dropdown-toggle px-4"
                    type="button"
                    id="#dropdownMenu"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="fa-solid fa-moon"></i>
                  </button>
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  <button
                    style={{
                      backgroundColor: "rgb(211, 211, 211)",
                      color: "black",
                    }}
                    className="btn btn-secondary dropdown-toggle p-2  px-3"
                    type="button"
                    id="dropdownMenu"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="fa-solid fa-globe mr-2"></i>
                    English
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Language 1
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Language 2
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Language 3
                      </a>
                    </li>
                  </ul>
                </a>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  <Example />
                </NavLink>
              </li>
              <li class="nav-item">
              <NavLink className="nav-link" to="/profile"> <button
                  style={{
                    backgroundColor: "rgb(211, 211, 211)",
                    color: "black",
                  }}
                  className="btn btn-secondary  p-2  px-3"
                  type="button"
                  aria-expanded="false"
                >
                  <i class="fas fa-user mr-1"></i>
                  Profile
                </button>
                </NavLink>
              </li>
            </ul>
            <a className="navbar-brand" href="#">
              <a href="">
                <img src={logo} alt="" style={{ width: "80%" }} />
              </a>
            </a>
          </div>
        </div>
      </nav>
      <nav className="bg-light">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 py-2">
              <div className="d-flex align-items-center">
                <button
                  type="button"
                  className="btn btn-warning h6 m-2"
                  style={{
                    fontWeight: "normal",
                    fontFamily: "monospace",
                    fontSize: "normal",
                  }}
                >
                  <NavLink
                    to="/add"
                    style={{
                      fontWeight: "normal",
                      fontFamily: "monospace",
                      fontSize: "normal",
                    }}
                  >
                    + Add your Post
                  </NavLink>
                </button>

                <div class="form ml-5 m-auto mr-2">
                  <i class="fa fa-search text-primary text"></i>
                  <input
                    type="text"
                    class="form-control form-input px-5 text-left"
                    style={{ minWidth: "50vw" }}
                    placeholder="Search anything..."
                    onChange={ONchange}
                  />
                  <span class="left-pan text-primary px-">
                    <i class="fa fa-microphone"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
