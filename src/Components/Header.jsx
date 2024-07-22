import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
import logo from "../assets/haraj-logo.png";

const Header = () => {
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
        <div className="container-fluid" style={{background:"#dddddd"}}>
          <div className="row align-items-center p-3" id="toprow">
            <div class="scrollbmenu">
              <a href="#home">
                {" "}
                <span className="h6 text-secondary">
                  More Sections <i className="fa fa-align-center"></i>
                </span>
              </a>
              <a href="#news">
                <span className="h6 text-secondary">Services</span>
              </a>
              <a href="#contact">
                <span className="h6 text-secondary">
                  Search <i className="fa fa-search"></i>
                </span>
              </a>
              <a href="#about">
                <span className="h6 text-secondary">
                  Furniture <i className="fas fa-couch"></i>
                </span>
              </a>
              <a href="#support">
                <span className="h6 text-secondary">Livestock and animals</span>
              </a>
              <a href="#blog">
                {" "}
                <span className="h6 text-secondary">Real estates</span>
              </a>
              <a href="#tools">
                <span className="h6 text-secondary">
                  Devices <i className="fa fa-mobile-phone"></i>
                </span>
              </a>
              <a href="#base">
                <span className="h6 text-secondary">
                  Cars <i className="fas fa-car"></i>
                </span>
              </a>
              <a href="#custom">
                <span className="h6 text-secondary">Mains</span>
              </a>
            </div>
          </div>
        </div>

        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <button
                    style={{
                      backgroundColor: "rgb(211, 211, 211)",
                      color: "black",
                    }}
                    className="btn btn-secondary dropdown-toggle p-2"
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
                    className="btn btn-secondary dropdown-toggle p-2"
                    type="button"
                    id="#dropdownMenu"
                    data-bs-toggle="dropdownh"
                    aria-expanded="false"
                  >
                    <i class="fa-solid fa-globe mr-2"></i>
                    English
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenu">
                    <li>
                      <a className="dropdown-item" href="#">
                        language 1
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        language 2
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        language 3
                      </a>
                    </li>
                  </ul>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <button
                    style={{
                      backgroundColor: "rgb(211, 211, 211)",
                      color: "black",
                    }}
                    className="btn btn-secondary p-2"
                    type="button"
                    id="#dropdownMenu"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Login
                    <i class="fa-solid fa-arrow-right"></i>
                  </button>
                </a>
              </li>
            </ul>
            <a className="navbar-brand" href="#">
              <a href="">
                <img src={logo} alt="" style={{ width: "80%" }} />
              </a>
            </a>
          </div>
        </nav>
        <nav className="bg-light" >
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12 py-2">
                <div className="d-flex align-items-center">
                  <button
                    type="button"
                    className="btn btn-warning px-3 h2 m-3"
                    style={{ fontWeight: "normal" }}
                  >
                    + Add your Post
                  </button>
                  <div class="form ml-5 m-auto mr-2">
                    <i class="fa fa-search text-primary"></i>
                    <input
                      type="text"
                      class="form-control form-input px-5"
                      style={{ minWidth: "50vw" }}
                      placeholder="Search anything..."
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
      </header>
    </>
  );
};

export default Header;