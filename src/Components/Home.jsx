import React, { useEffect, useContext } from 'react';
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
} from "lucide-react";
import Sidecode from "./Sidecode";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { MDBInputGroup, MDBInput, MDBIcon, MDBBtn } from "mdb-react-ui-kit";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import SplitButton from "react-bootstrap/SplitButton";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import img1 from "../assets/images/body-images/game.webp";
import img2 from "../assets/images/body-images/iphone.webp";
import img3 from "../assets/images/body-images/mob.webp";
import img4 from "../assets/images/body-images/remote.webp";
import img5 from "../assets/images/body-images/vivo.webp";

import { SearchCheck } from "lucide";
import TabContent from "../dashboard/TabContent";
import { counterContext } from "../contexts/ActiveTabContexts";

const Home = () => {
  const value = useContext(counterContext);

  useEffect(() => {
   
    const tabMap = {
     "all": 'all-tab',
      "hunting": 'hunting-tab',
    "library": 'library-tab',
      "programming": 'pg-tab',
      "jobs": 'jobs-tab',
      "services": 'services-tab',
      "personal": 'tools-tab',
     "furniture": 'base-tab',
      "animals": 'animals-tab',
     "devices": 'devices-tab',
      "real": 'real-estate-tab',
     "cars": 'cars-tab'
    };

    const tabId = tabMap[value.count];
    if (tabId) {
      console.log(tabId,value)
      const tabElement = document.getElementById(tabId);
      if (tabElement) {
        tabElement.click();
      }
    }
    else{
      document.getElementById("all-tab").click();
    }
  }, [value]);

  const customButtonStyles = {
    backgroundColor: "#6c757d",
    borderColor: "#6c757d",
    color: "white",
  };

  const customButtonHoverStyles = {
    backgroundColor: "#ffc107",
    borderColor: "#ffc107",
    color: "black",
  };

  return (
    <div>
      <div className="scrollbmenu" style={{ background: "#FAF9F6" }}>
        <ul className="nav nav-tabs" id="myTab" role="tablist" style={{ flexWrap: "nowrap" }}>
          <li className="nav-item">
            <a className="nav-link" id="all-tab" data-toggle="tab" href="#all" role="tab" aria-controls="all" aria-selected="true">
              <span>
                <CircleEllipsis /> <br />
                All auctions
              </span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="hunting-tab" data-toggle="tab" href="#hunting" role="tab" aria-controls="hunting" aria-selected="false">
              <Plane /> <br />
              Hunting and Trips
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="library-tab" data-toggle="tab" href="#library" role="tab" aria-controls="library" aria-selected="false">
              <BookOpenCheck /> <br />
              Library and arts
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="pg-tab" data-toggle="tab" href="#pg" role="tab" aria-controls="pg" aria-selected="false">
              <Code /> <br />
              Programming and Design
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="jobs-tab" data-toggle="tab" href="#jobs" role="tab" aria-controls="jobs" aria-selected="false">
              <BriefcaseBusiness /> <br />
              Jobs
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="services-tab" data-toggle="tab" href="#services" role="tab" aria-controls="services" aria-selected="false">
              <HandHelping /> <br />
              Services
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="tools-tab" data-toggle="tab" href="#tools" role="tab" aria-controls="tools" aria-selected="false">
              <Shirt /> <br />
              Personal accessories
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="base-tab" data-toggle="tab" href="#base" role="tab" aria-controls="base" aria-selected="false">
              <BedDouble /> <br />
              Furniture
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="animals-tab" data-toggle="tab" href="#animals" role="tab" aria-controls="animals" aria-selected="false">
              <Cat /> <br />
              Animals and birds
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="devices-tab" data-toggle="tab" href="#devices" role="tab" aria-controls="devices" aria-selected="false">
              <PhoneIcon /> <br />
              Devices
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="real-estate-tab" data-toggle="tab" href="#real-estate" role="tab" aria-controls="real-estate" aria-selected="false">
              <Building2Icon /> <br />
              Real Estate
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="cars-tab" data-toggle="tab" href="#cars" role="tab" aria-controls="cars" aria-selected="false">
              <CarTaxiFrontIcon /> <br />
              Cars
            </a>
          </li>
        </ul>
      </div>

      <div className="scrollbmenu" style={{ background: "#FAF9F6" }}>
        {/* Buttons */}
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
      <div className="container-fluid ">
        
            <div className="row tab-content" id="myTabContent" >
            <TabContent></TabContent>
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
   
  );
};

export default Home;