import React from "react";
import {
  CircleEllipsis,
  Plane,
  BookOpenCheck,
  Code,
  Shirt,
  HandHelping,
  BriefcaseBusiness,
  BedDouble,
  Cat,
  PhoneIcon,
  Building2Icon,
  CarTaxiFrontIcon,
  User2Icon,
  Clock12Icon,
  Clock,
  MapPin,
} from "lucide-react";
import Sidecode from "./Sidecode";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { MDBInputGroup, MDBInput, MDBIcon, MDBBtn } from "mdb-react-ui-kit";



import DropdownButton from "react-bootstrap/DropdownButton";

import Dropdown from "react-bootstrap/Dropdown";
import SplitButton from "react-bootstrap/SplitButton";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

import img1 from "../assets/game.webp";
import img2 from "../assets/iphone.webp";
import img3 from "../assets/mob.webp";
import img4 from "../assets/remote.webp";
import { IonSearchbar } from "@ionic/react";
import img5 from "../assets/vivo.webp";

import avatar from "../assets/a.jpg";
import { SearchCheck } from "lucide";
const Home = () => {
  const customButtonStyles = {
    backgroundColor: "#6c757d", // Default grey color
    borderColor: "#6c757d",
    color: "white",
  };

  const customButtonHoverStyles = {
    backgroundColor: "#ffc107", // Yellow color on hover
    borderColor: "#ffc107",
    color: "black",
  };

  return (
    <div>
      <div className="scrollbmenu" style={{ background: "#FAF9F6" }}>
        <a className="text-secondary" href="#home">
          <span>
            <CircleEllipsis></CircleEllipsis> <br />
            All auctions
          </span>
        </a>
        <a className="text-secondary" href="#news">
          <Plane />
          <br /> Hunting and Trips
        </a>
        <a className="text-secondary" href="#contact">
          <BookOpenCheck />
          <br />
          Library and arts
        </a>
        <a className="text-secondary" href="#about">
          <Code />
          <br />
          Programming and Design
        </a>
        <a className="text-secondary" href="#support">
          <BriefcaseBusiness />
          <br />
          jobs
        </a>
        <a className="text-secondary" href="#blog">
          <HandHelping />
          <br />
          Services
        </a>
        <a className="text-secondary" href="#tools">
          <Shirt />
          <br />
          Personal accessories
        </a>
        <a className="text-secondary" href="#base">
          <BedDouble />
          <br />
          Furniture
        </a>
        <a className="text-secondary" href="#custom">
          <Cat />
          <br />
          Animals and birds
        </a>
        <a className="text-secondary" href="#more">
          <PhoneIcon></PhoneIcon>
          <br />
          Devices
        </a>
        <a className="text-secondary" href="#logo">
          <Building2Icon></Building2Icon>
          <br />
          real eState
        </a>
        <a className="text-secondary" href="#friends">
          <CarTaxiFrontIcon></CarTaxiFrontIcon>
          <br />
          Cars
        </a>
      </div>
      <div className="scrollbmenu" style={{ background: "#FAF9F6" }}>
        <a className="text-secondary" href="#home">
          <button type="button" className="btn btn-outline-secondary">
            Job Restaurents
          </button>
        </a>
        <a className="text-secondary" href="#news">
          <button type="button" className="btn btn-outline-secondary">
            Home Employment Jobs
          </button>
        </a>
        <a className="text-secondary" href="#contact">
          <button type="button" className="btn btn-outline-secondary">
            Building and Building Jobs
          </button>
        </a>
        <a className="text-secondary" href="#about">
          <button type="button" className="btn btn-outline-secondary">
            Jobs Medical and Nursing
          </button>
        </a>
        <a className="text-secondary" href="#support">
          <button type="button" className="btn btn-outline-secondary">
            Industrial Jobs
          </button>
        </a>
        <a className="text-secondary" href="#blog">
          <button type="button" className="btn btn-outline-secondary">
            Agriculture and grazing functions
          </button>
        </a>
        <a className="text-secondary" href="#tools">
          <button type="button" className="btn btn-outline-secondary">
            Technical and Design functions
          </button>
        </a>
        <a className="text-secondary" href="#base">
          <button type="button" className="btn btn-outline-secondary">
            Educational Functions
          </button>
        </a>
        <a className="text-secondary" href="#custom">
          <button type="button" className="btn btn-outline-secondary">
            Security and Services
          </button>
        </a>
        <a className="text-secondary" href="#more">
          <button type="button" className="btn btn-outline-secondary">
            Costume and Beauty jobs
          </button>
        </a>
        <a className="text-secondary" href="#logo">
          <button type="button" className="btn btn-outline-secondary px-3 py-2">
            Administrative Functions
          </button>
        </a>
      </div>
      <div className="scrollbmenu" style={{ background: "#FAF9F6" }}>
        <a className="text-secondary" href="#home">
          <button type="button" className="btn btn-outline-secondary">
            A and Sincere Job{" "}
          </button>
        </a>
        <a className="text-secondary" href="#news">
          <button type="button" className="btn btn-outline-secondary">
            A lawyer and legal function
          </button>
        </a>
        <a className="text-secondary" href="#contact">
          <button type="button" className="btn btn-outline-secondary">
            Post translator languages
          </button>
        </a>
        <a className="text-secondary" href="#about">
          <button type="button" className="btn btn-outline-secondary">
            Function relationships and information
          </button>
        </a>
        <a className="text-secondary" href="#support">
          <button type="button" className="btn btn-outline-secondary">
            Other administrative functions
          </button>
        </a>
        <a className="text-secondary" href="#blog">
          <button type="button" className="btn btn-outline-secondary">
            Delegate Delivery
          </button>
        </a>
        <a className="text-secondary" href="#tools">
          <button type="button" className="btn btn-outline-secondary">
            Accountant
          </button>
        </a>
        <a className="text-secondary" href="#base">
          <button type="button" className="btn btn-outline-secondary">
            Cashier
          </button>
        </a>
        <a className="text-secondary" href="#custom">
          <button type="button" className="btn btn-outline-secondary">
            Tourism and hotel
          </button>
        </a>
        <a className="text-secondary" href="#more">
          <button type="button" className="btn btn-outline-secondary">
            secretary
          </button>
        </a>
        <a className="text-secondary" href="#logo">
          <button type="button" className="btn btn-outline-secondary px-3 py-2">
            customer service
          </button>
        </a>
        <a className="text-secondary" href="#logo">
          <button type="button" className="btn btn-outline-secondary px-3 py-2">
            Marketing and sales
          </button>
        </a>
      </div>
      <div className="container-fluid">
        <div className="table-responsive">
          <div className="table-wrapper">
            <div className="row">
              <div className="col-md-9 col-sm-12 col-12">
                <table className="table table-striped table-hover">
                  <tbody>
                    <tr>
                     <td className="text-center">
                        <a href="#">
                          <img
                            style={{ width: "8vw" }}
                            src={img5}
                            className="avatar"
                            alt="Avatar"
                          />{" "}
                        </a>
                      </td>

                      <td className="text-right">
                        2 minutes ago<Clock></Clock>
                        <br />
                        Shyam added <User2Icon></User2Icon>
                      </td>

                      <td  className="text-right">
                        <span> pro max 11 vinay پرو میکس </span>
                        <br />
                        <span>
                          Makkah <MapPin></MapPin>
                        </span>
                      </td>
                    </tr>
                    <tr>
                     <td className="text-center">
                        <a href="#">
                          <img
                            style={{ width: "8vw" }}
                            src={img1}
                            className="avatar"
                            alt="Avatar"
                          />{" "}
                        </a>
                      </td>

                      <td className="text-right">
                        2 minutes ago<Clock></Clock>
                        <br />
                        Shyam added <User2Icon></User2Icon>
                      </td>

                      <td  className="text-right">
                        <span> pro max 11 vinay پرو میکس </span>
                        <br />
                        <span>
                          Makkah <MapPin></MapPin>
                        </span>
                      </td>
                    </tr>{" "}
                    <tr>
                      <td className="text-center">
                        <a href="#">
                          <img
                            style={{ width: "8vw" }}
                            src={img2}
                            className="avatar"
                            alt="Avatar"
                          />{" "}
                        </a>
                      </td>

                      <td className="text-right">
                        2 minutes ago<Clock></Clock>
                        <br />
                        Shyam added <User2Icon></User2Icon>
                      </td>

                      <td  className="text-right">
                        <span> pro max 11 vinay پرو میکس </span>
                        <br />
                        <span>
                          Makkah <MapPin></MapPin>
                        </span>
                      </td>
                    </tr>{" "}
                    <tr>
                     <td className="text-center">
                        <a href="#">
                          <img
                            style={{ width: "8vw" }}
                            src={img3}
                            className="avatar"
                            alt="Avatar"
                          />{" "}
                        </a>
                      </td>

                      <td className="text-right">
                        2 minutes ago<Clock></Clock>
                        <br />
                        Shyam added <User2Icon></User2Icon>
                      </td>

                      <td  className="text-right">
                        <span> pro max 11 vinay پرو میکس </span>
                        <br />
                        <span>
                          Makkah <MapPin></MapPin>
                        </span>
                      </td>
                    </tr>{" "}
                    <tr>
                     <td className="text-center">
                        <a href="#">
                          <img
                            style={{ width: "8vw" }}
                            src={img4}
                            className="avatar"
                            alt="Avatar"
                          />{" "}
                        </a>
                      </td>

                      <td className="text-right">
                        2 minutes ago<Clock></Clock>
                        <br />
                        Shyam added <User2Icon></User2Icon>
                      </td>

                      <td  className="text-right">
                        <span> pro max 11 vinay پرو میکس </span>
                        <br />
                        <span>
                          Makkah <MapPin></MapPin>
                        </span>
                      </td>
                    </tr>
                    <tr>
                     <td className="text-center">
                        <a href="#">
                          <img
                            style={{ width: "8vw" }}
                            src={img4}
                            className="avatar"
                            alt="Avatar"
                          />{" "}
                        </a>
                      </td>

                      <td className="text-right">
                        2 minutes ago<Clock></Clock>
                        <br />
                        Shyam added <User2Icon></User2Icon>
                      </td>

                      <td  className="text-right">
                        <span> pro max 11 vinay پرو میکس </span>
                        <br />
                        <span>
                          Makkah <MapPin></MapPin>
                        </span>
                      </td>
                    </tr>
                    <tr>
                     <td className="text-center">
                        <a href="#">
                          <img
                            style={{ width: "8vw" }}
                            src={img4}
                            className="avatar"
                            alt="Avatar"
                          />{" "}
                        </a>
                      </td>

                      <td className="text-right">
                        2 minutes ago<Clock></Clock>
                        <br />
                        Shyam added <User2Icon></User2Icon>
                      </td>

                      <td  className="text-right">
                        <span> pro max 11 vinay پرو میکس </span>
                        <br />
                        <span>
                          Makkah <MapPin></MapPin>
                        </span>
                      </td>
                    </tr>
                    <tr>
                     <td className="text-center">
                        <a href="#">
                          <img
                            style={{ width: "8vw" }}
                            src={img4}
                            className="avatar"
                            alt="Avatar"
                          />{" "}
                        </a>
                      </td>

                      <td className="text-right">
                        2 minutes ago<Clock></Clock>
                        <br />
                        Shyam added <User2Icon></User2Icon>
                      </td>

                      <td  className="text-right">
                        <span> pro max 11 vinay پرو میکس </span>
                        <br />
                        <span>
                          Makkah <MapPin></MapPin>
                        </span>
                      </td>
                    </tr>
                    <tr>
                     <td className="text-center">
                        <a href="#">
                          <img
                            style={{ width: "8vw" }}
                            src={img4}
                            className="avatar"
                            alt="Avatar"
                          />{" "}
                        </a>
                      </td>

                      <td className="text-right">
                        2 minutes ago<Clock></Clock>
                        <br />
                        Shyam added <User2Icon></User2Icon>
                      </td>

                      <td  className="text-right">
                        <span> pro max 11 vinay پرو میکس </span>
                        <br />
                        <span>
                          Makkah <MapPin></MapPin>
                        </span>
                      </td>
                    </tr>
                    <tr>
                     <td className="text-center">
                        <a href="#">
                          <img
                            style={{ width: "8vw" }}
                            src={img4}
                            className="avatar"
                            alt="Avatar"
                          />{" "}
                        </a>
                      </td>

                      <td className="text-right">
                        2 minutes ago<Clock></Clock>
                        <br />
                        Shyam added <User2Icon></User2Icon>
                      </td>

                      <td  className="text-right">
                        <span> pro max 11 vinay پرو میکس </span>
                        <br />
                        <span>
                          Makkah <MapPin></MapPin>
                        </span>
                      </td>
                    </tr>
                    <tr>
                     <td className="text-center">
                        <a href="#">
                          <img
                            style={{ width: "8vw" }}
                            src={img4}
                            className="avatar"
                            alt="Avatar"
                          />{" "}
                        </a>
                      </td>

                      <td className="text-right">
                        2 minutes ago<Clock></Clock>
                        <br />
                        Shyam added <User2Icon></User2Icon>
                      </td>

                      <td  className="text-right">
                        <span> pro max 11 vinay پرو میکس </span>
                        <br />
                        <span>
                          Makkah <MapPin></MapPin>
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-md-3 d-none d-sm-block text-center">
                <Table>
                  <tbody>
                    <tr>
                      <td className="text-center">Device</td>
                    </tr>
                    <tr>
                      <td className="text-center">@fat</td>
                    </tr>
                    <tr>
                      <td className="text-center">@twitter</td>
                    </tr>
                    <tr>
                      <td className="text-center">Real Estate</td>
                    </tr>
                    <tr>
                      <td className="text-center">
                        Animals, livestock and birds
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">Furniture</td>
                    </tr>
                    <tr>
                      <td className="text-center">Library and Arts</td>
                    </tr>
                  </tbody>
                </Table>
                {["Devices"].map((variant) => (
                  <DropdownButton
                    as={ButtonGroup}
                    key={variant}
                    id={`dropdown-variants-${variant}`}
                    variant={variant.toLowerCase()}
                    className="btn btn-lg btn-block"
                    title={variant}
                    style={{ border: "2px solid black", fontFamily: "cursive" }}
                    // Inline CSS for black border
                  >
                    <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                    <Dropdown.Item eventKey="3" active>
                      Active Item
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                  </DropdownButton>
                ))}
                {["All"].map((variant) => (
                  <DropdownButton
                    as={ButtonGroup}
                    key={variant}
                    id={`dropdown-variants-${variant}`}
                    variant={variant.toLowerCase()}
                    className="btn btn-lg btn-block"
                    title={variant}
                    style={{
                      border: "2px solid black",
                      fontFamily: "cursive",
                      position: "relative",
                    }}
                    // Inline CSS for black border
                  >
                    <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                    <Dropdown.Item eventKey="3" active>
                      Active Item
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                  </DropdownButton>
                ))}
                <div style={{ position: "relative", top: "20px" }}>
                  <div>
                    <button class="btn btn-outline-primary bg-primary d-inline btn-block btn-lg text-white">
                      Search
                      <i
                        class="fa fa-search ml-1 float-center mt-auto text-white"
                        aria-hidden="true"
                      ></i>
                    </button>
                  </div>
                </div>
                <Sidecode/>
                

               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
