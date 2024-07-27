import React, { useState } from 'react';
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
  Clock,
  MapPin,
} from "lucide-react";
import img1 from "../assets/images/body-images/game.webp";
import img2 from "../assets/images/body-images/iphone.webp";
import img3 from "../assets/images/body-images/mob.webp";
import img4 from "../assets/images/body-images/remote.webp";
import img5 from "../assets/images/body-images/vivo.webp";

const TabContent = () => {
    
    return (
        <>
         
  
        
            <div className="col-md-9 col-sm-12 col-12 tab-pane fade show active" 
                id="all" 
                role="tabpanel" 
                aria-labelledby="all-tab">
                <table className="table">
                    <tbody>
                    <tr>
                            <td className="text-center">
                                <a href="#">
                                    <img
                                        style={{ width: "8vw" }}
                                        src={img2}
                                        className="avatar"
                                        alt="Avatar"
                                    />
                                </a>
                            </td>
                            <td className="text-right">
                                2 hours ago<Clock />
                                <br />
                                Mia added <User2Icon />
                            </td>
                            <td className="text-right">
                                <span>Accessory Designer</span>
                                <br />
                                <span>
                                    Milan <MapPin />
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-center">
                                <a href="#">
                                    <img
                                        style={{ width: "8vw" }}
                                        src={img3}
                                        className="avatar"
                                        alt="Avatar"
                                    />
                                </a>
                            </td>
                            <td className="text-right">
                                3 hours ago<Clock />
                                <br />
                                Sophia added <User2Icon />
                            </td>
                            <td className="text-right">
                                <span>Fashion Consultant</span>
                                <br />
                                <span>
                                    Paris <MapPin />
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-center">
                                <a href="#">
                                    <img
                                        style={{ width: "8vw" }}
                                        src={img2}
                                        className="avatar"
                                        alt="Avatar"
                                    />
                                </a>
                            </td>
                            <td className="text-right">
                                2 hours ago<Clock />
                                <br />
                                Mia added <User2Icon />
                            </td>
                            <td className="text-right">
                                <span>Accessory Designer</span>
                                <br />
                                <span>
                                    Milan <MapPin />
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-center">
                                <a href="#">
                                    <img
                                        style={{ width: "8vw" }}
                                        src={img3}
                                        className="avatar"
                                        alt="Avatar"
                                    />
                                </a>
                            </td>
                            <td className="text-right">
                                3 hours ago<Clock />
                                <br />
                                Sophia added <User2Icon />
                            </td>
                            <td className="text-right">
                                <span>Fashion Consultant</span>
                                <br />
                                <span>
                                    Paris <MapPin />
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-center">
                                <a href="#">
                                    <img
                                        style={{ width: "8vw" }}
                                        src={img2}
                                        className="avatar"
                                        alt="Avatar"
                                    />
                                </a>
                            </td>
                            <td className="text-right">
                                2 hours ago<Clock />
                                <br />
                                Mia added <User2Icon />
                            </td>
                            <td className="text-right">
                                <span>Accessory Designer</span>
                                <br />
                                <span>
                                    Milan <MapPin />
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-center">
                                <a href="#">
                                    <img
                                        style={{ width: "8vw" }}
                                        src={img3}
                                        className="avatar"
                                        alt="Avatar"
                                    />
                                </a>
                            </td>
                            <td className="text-right">
                                3 hours ago<Clock />
                                <br />
                                Sophia added <User2Icon />
                            </td>
                            <td className="text-right">
                                <span>Fashion Consultant</span>
                                <br />
                                <span>
                                    Paris <MapPin />
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-center">
                                <a href="#">
                                    <img
                                        style={{ width: "8vw" }}
                                        src={img2}
                                        className="avatar"
                                        alt="Avatar"
                                    />
                                </a>
                            </td>
                            <td className="text-right">
                                2 hours ago<Clock />
                                <br />
                                Mia added <User2Icon />
                            </td>
                            <td className="text-right">
                                <span>Accessory Designer</span>
                                <br />
                                <span>
                                    Milan <MapPin />
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-center">
                                <a href="#">
                                    <img
                                        style={{ width: "8vw" }}
                                        src={img3}
                                        className="avatar"
                                        alt="Avatar"
                                    />
                                </a>
                            </td>
                            <td className="text-right">
                                3 hours ago<Clock />
                                <br />
                                Sophia added <User2Icon />
                            </td>
                            <td className="text-right">
                                <span>Fashion Consultant</span>
                                <br />
                                <span>
                                    Paris <MapPin />
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-center">
                                <a href="#">
                                    <img
                                        style={{ width: "8vw" }}
                                        src={img2}
                                        className="avatar"
                                        alt="Avatar"
                                    />
                                </a>
                            </td>
                            <td className="text-right">
                                2 hours ago<Clock />
                                <br />
                                Mia added <User2Icon />
                            </td>
                            <td className="text-right">
                                <span>Accessory Designer</span>
                                <br />
                                <span>
                                    Milan <MapPin />
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-center">
                                <a href="#">
                                    <img
                                        style={{ width: "8vw" }}
                                        src={img3}
                                        className="avatar"
                                        alt="Avatar"
                                    />
                                </a>
                            </td>
                            <td className="text-right">
                                3 hours ago<Clock />
                                <br />
                                Sophia added <User2Icon />
                            </td>
                            <td className="text-right">
                                <span>Fashion Consultant</span>
                                <br />
                                <span>
                                    Paris <MapPin />
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-center">
                                <a href="#">
                                    <img
                                        style={{ width: "8vw" }}
                                        src={img2}
                                        className="avatar"
                                        alt="Avatar"
                                    />
                                </a>
                            </td>
                            <td className="text-right">
                                2 hours ago<Clock />
                                <br />
                                Mia added <User2Icon />
                            </td>
                            <td className="text-right">
                                <span>Accessory Designer</span>
                                <br />
                                <span>
                                    Milan <MapPin />
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-center">
                                <a href="#">
                                    <img
                                        style={{ width: "8vw" }}
                                        src={img3}
                                        className="avatar"
                                        alt="Avatar"
                                    />
                                </a>
                            </td>
                            <td className="text-right">
                                3 hours ago<Clock />
                                <br />
                                Sophia added <User2Icon />
                            </td>
                            <td className="text-right">
                                <span>Fashion Consultant</span>
                                <br />
                                <span>
                                    Paris <MapPin />
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-center">
                                <a href="#">
                                    <img
                                        style={{ width: "8vw" }}
                                        src={img5}
                                        className="avatar"
                                        alt="Avatar"
                                    />
                                </a>
                            </td>
                            <td className="text-right">
                                2 minutes ago<Clock />
                                <br />
                                Shyam added <User2Icon />
                            </td>
                            <td className="text-right">
                                <span>pro max 11 vinay پرو میکس</span>
                                <br />
                                <span>
                                    Makkah <MapPin />
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
                                    />
                                </a>
                            </td>
                            <td className="text-right">
                                2 minutes ago<Clock />
                                <br />
                                Shyam added <User2Icon />
                            </td>
                            <td className="text-right">
                                <span>pro max 11 vinay پرو میکس</span>
                                <br />
                                <span>
                                    Makkah <MapPin />
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="col-md-9 col-sm-12 col-12 tab-pane fade" 
                id="hunting" 
                role="tabpanel" 
                aria-labelledby="hunting-tab">
                <table className="table">
                    <tbody>
                    <tr>
                            <td className="text-center">
                                <a href="#">
                                    <img
                                        style={{ width: "8vw" }}
                                        src={img4}
                                        className="avatar"
                                        alt="Avatar"
                                    />
                                </a>
                            </td>
                            <td className="text-right">
                                2 minutes ago<Clock />
                                <br />
                                Shyam added <User2Icon />
                            </td>
                            <td className="text-right">
                                <span>pro max 11 vinay پرو میکس</span>
                                <br />
                                <span>
                                    Makkah <MapPin />
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
                                    />
                                </a>
                            </td>
                            <td className="text-right">
                                2 minutes ago<Clock />
                                <br />
                                Shyam added <User2Icon />
                            </td>
                            <td className="text-right">
                                <span>pro max 11 vinay پرو میکس</span>
                                <br />
                                <span>
                                    Makkah <MapPin />
                                </span>
                            </td>
                        </tr>
                      
                     
                    </tbody>
                </table>
            </div>
            <div className="col-md-9 col-sm-12 col-12 tab-pane fade" 
                id="library" 
                role="tabpanel" 
                aria-labelledby="library-tab">
                <table className="table">
                    <tbody>
                        <tr>
                            <td className="text-center">
                                <a href="#">
                                    <img
                                        style={{ width: "8vw" }}
                                        src={img4}
                                        className="avatar"
                                        alt="Avatar"
                                    />
                                </a>
                            </td>
                            <td className="text-right">
                                2 minutes ago<Clock />
                                <br />
                                Shyam added <User2Icon />
                            </td>
                            <td className="text-right">
                                <span>pro max 11 vinay پرو میکس</span>
                                <br />
                                <span>
                                    Makkah <MapPin />
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
                                    />
                                </a>
                            </td>
                            <td className="text-right">
                                2 minutes ago<Clock />
                                <br />
                                Shyam added <User2Icon />
                            </td>
                            <td className="text-right">
                                <span>pro max 11 vinay پرو میکس</span>
                                <br />
                                <span>
                                    Makkah <MapPin />
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="col-md-9 col-sm-12 col-12 tab-pane fade" 
                id="pg" 
                role="tabpanel" 
                aria-labelledby="pg-tab">
                <table className="table">
                    <tbody>
                        <tr>
                            <td className="text-center">
                                <a href="#">
                                    <img
                                        style={{ width: "8vw" }}
                                        src={img1}
                                        className="avatar"
                                        alt="Avatar"
                                    />
                                </a>
                            </td>
                            <td className="text-right">
                                10 minutes ago<Clock />
                                <br />
                                John added <User2Icon />
                            </td>
                            <td className="text-right">
                                <span>React Developer</span>
                                <br />
                                <span>
                                    San Francisco <MapPin />
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-center">
                                <a href="#">
                                    <img
                                        style={{ width: "8vw" }}
                                        src={img2}
                                        className="avatar"
                                        alt="Avatar"
                                    />
                                </a>
                            </td>
                            <td className="text-right">
                                15 minutes ago<Clock />
                                <br />
                                Alice added <User2Icon />
                            </td>
                            <td className="text-right">
                                <span>Frontend Engineer</span>
                                <br />
                                <span>
                                    New York <MapPin />
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Jobs Tab Content */}
            <div className="col-md-9 col-sm-12 col-12 tab-pane fade" 
                id="jobs" 
                role="tabpanel" 
                aria-labelledby="jobs-tab">
                <table className="table">
                    <tbody>
                        <tr>
                            <td className="text-center">
                                <a href="#">
                                    <img
                                        style={{ width: "8vw" }}
                                        src={img3}
                                        className="avatar"
                                        alt="Avatar"
                                    />
                                </a>
                            </td>
                            <td className="text-right">
                                20 minutes ago<Clock />
                                <br />
                                Emma added <User2Icon />
                            </td>
                            <td className="text-right">
                                <span>Project Manager</span>
                                <br />
                                <span>
                                    London <MapPin />
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
                                    />
                                </a>
                            </td>
                            <td className="text-right">
                                30 minutes ago<Clock />
                                <br />
                                Lucas added <User2Icon />
                            </td>
                            <td className="text-right">
                                <span>UX Designer</span>
                                <br />
                                <span>
                                    Berlin <MapPin />
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Services Tab Content */}
            <div className="col-md-9 col-sm-12 col-12 tab-pane fade" 
                id="services" 
                role="tabpanel" 
                aria-labelledby="services-tab">
                <table className="table">
                    <tbody>
                        <tr>
                            <td className="text-center">
                                <a href="#">
                                    <img
                                        style={{ width: "8vw" }}
                                        src={img5}
                                        className="avatar"
                                        alt="Avatar"
                                    />
                                </a>
                            </td>
                            <td className="text-right">
                                1 hour ago<Clock />
                                <br />
                                Oliver added <User2Icon />
                            </td>
                            <td className="text-right">
                                <span>Web Designer</span>
                                <br />
                                <span>
                                    Tokyo <MapPin />
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
                                    />
                                </a>
                            </td>
                            <td className="text-right">
                                1 hour ago<Clock />
                                <br />
                                Ava added <User2Icon />
                            </td>
                            <td className="text-right">
                                <span>Graphic Designer</span>
                                <br />
                                <span>
                                    Sydney <MapPin />
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Personal Accessories Tab Content */}
            <div className="col-md-9 col-sm-12 col-12 tab-pane fade" 
                id="tools" 
                role="tabpanel" 
                aria-labelledby="tools-tab">
                <table className="table">
                    <tbody>
                        <tr>
                            <td className="text-center">
                                <a href="#">
                                    <img
                                        style={{ width: "8vw" }}
                                        src={img2}
                                        className="avatar"
                                        alt="Avatar"
                                    />
                                </a>
                            </td>
                            <td className="text-right">
                                2 hours ago<Clock />
                                <br />
                                Mia added <User2Icon />
                            </td>
                            <td className="text-right">
                                <span>Accessory Designer</span>
                                <br />
                                <span>
                                    Milan <MapPin />
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-center">
                                <a href="#">
                                    <img
                                        style={{ width: "8vw" }}
                                        src={img3}
                                        className="avatar"
                                        alt="Avatar"
                                    />
                                </a>
                            </td>
                            <td className="text-right">
                                3 hours ago<Clock />
                                <br />
                                Sophia added <User2Icon />
                            </td>
                            <td className="text-right">
                                <span>Fashion Consultant</span>
                                <br />
                                <span>
                                    Paris <MapPin />
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-center">
                                <a href="#">
                                    <img
                                        style={{ width: "8vw" }}
                                        src={img2}
                                        className="avatar"
                                        alt="Avatar"
                                    />
                                </a>
                            </td>
                            <td className="text-right">
                                2 hours ago<Clock />
                                <br />
                                Mia added <User2Icon />
                            </td>
                            <td className="text-right">
                                <span>Accessory Designer</span>
                                <br />
                                <span>
                                    Milan <MapPin />
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-center">
                                <a href="#">
                                    <img
                                        style={{ width: "8vw" }}
                                        src={img3}
                                        className="avatar"
                                        alt="Avatar"
                                    />
                                </a>
                            </td>
                            <td className="text-right">
                                3 hours ago<Clock />
                                <br />
                                Sophia added <User2Icon />
                            </td>
                            <td className="text-right">
                                <span>Fashion Consultant</span>
                                <br />
                                <span>
                                    Paris <MapPin />
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-center">
                                <a href="#">
                                    <img
                                        style={{ width: "8vw" }}
                                        src={img2}
                                        className="avatar"
                                        alt="Avatar"
                                    />
                                </a>
                            </td>
                            <td className="text-right">
                                2 hours ago<Clock />
                                <br />
                                Mia added <User2Icon />
                            </td>
                            <td className="text-right">
                                <span>Accessory Designer</span>
                                <br />
                                <span>
                                    Milan <MapPin />
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-center">
                                <a href="#">
                                    <img
                                        style={{ width: "8vw" }}
                                        src={img3}
                                        className="avatar"
                                        alt="Avatar"
                                    />
                                </a>
                            </td>
                            <td className="text-right">
                                3 hours ago<Clock />
                                <br />
                                Sophia added <User2Icon />
                            </td>
                            <td className="text-right">
                                <span>Fashion Consultant</span>
                                <br />
                                <span>
                                    Paris <MapPin />
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-center">
                                <a href="#">
                                    <img
                                        style={{ width: "8vw" }}
                                        src={img2}
                                        className="avatar"
                                        alt="Avatar"
                                    />
                                </a>
                            </td>
                            <td className="text-right">
                                2 hours ago<Clock />
                                <br />
                                Mia added <User2Icon />
                            </td>
                            <td className="text-right">
                                <span>Accessory Designer</span>
                                <br />
                                <span>
                                    Milan <MapPin />
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-center">
                                <a href="#">
                                    <img
                                        style={{ width: "8vw" }}
                                        src={img3}
                                        className="avatar"
                                        alt="Avatar"
                                    />
                                </a>
                            </td>
                            <td className="text-right">
                                3 hours ago<Clock />
                                <br />
                                Sophia added <User2Icon />
                            </td>
                            <td className="text-right">
                                <span>Fashion Consultant</span>
                                <br />
                                <span>
                                    Paris <MapPin />
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-center">
                                <a href="#">
                                    <img
                                        style={{ width: "8vw" }}
                                        src={img2}
                                        className="avatar"
                                        alt="Avatar"
                                    />
                                </a>
                            </td>
                            <td className="text-right">
                                2 hours ago<Clock />
                                <br />
                                Mia added <User2Icon />
                            </td>
                            <td className="text-right">
                                <span>Accessory Designer</span>
                                <br />
                                <span>
                                    Milan <MapPin />
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-center">
                                <a href="#">
                                    <img
                                        style={{ width: "8vw" }}
                                        src={img3}
                                        className="avatar"
                                        alt="Avatar"
                                    />
                                </a>
                            </td>
                            <td className="text-right">
                                3 hours ago<Clock />
                                <br />
                                Sophia added <User2Icon />
                            </td>
                            <td className="text-right">
                                <span>Fashion Consultant</span>
                                <br />
                                <span>
                                    Paris <MapPin />
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-center">
                                <a href="#">
                                    <img
                                        style={{ width: "8vw" }}
                                        src={img2}
                                        className="avatar"
                                        alt="Avatar"
                                    />
                                </a>
                            </td>
                            <td className="text-right">
                                2 hours ago<Clock />
                                <br />
                                Mia added <User2Icon />
                            </td>
                            <td className="text-right">
                                <span>Accessory Designer</span>
                                <br />
                                <span>
                                    Milan <MapPin />
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-center">
                                <a href="#">
                                    <img
                                        style={{ width: "8vw" }}
                                        src={img3}
                                        className="avatar"
                                        alt="Avatar"
                                    />
                                </a>
                            </td>
                            <td className="text-right">
                                3 hours ago<Clock />
                                <br />
                                Sophia added <User2Icon />
                            </td>
                            <td className="text-right">
                                <span>Fashion Consultant</span>
                                <br />
                                <span>
                                    Paris <MapPin />
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-center">
                                <a href="#">
                                    <img
                                        style={{ width: "8vw" }}
                                        src={img2}
                                        className="avatar"
                                        alt="Avatar"
                                    />
                                </a>
                            </td>
                            <td className="text-right">
                                2 hours ago<Clock />
                                <br />
                                Mia added <User2Icon />
                            </td>
                            <td className="text-right">
                                <span>Accessory Designer</span>
                                <br />
                                <span>
                                    Milan <MapPin />
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-center">
                                <a href="#">
                                    <img
                                        style={{ width: "8vw" }}
                                        src={img3}
                                        className="avatar"
                                        alt="Avatar"
                                    />
                                </a>
                            </td>
                            <td className="text-right">
                                3 hours ago<Clock />
                                <br />
                                Sophia added <User2Icon />
                            </td>
                            <td className="text-right">
                                <span>Fashion Consultant</span>
                                <br />
                                <span>
                                    Paris <MapPin />
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-center">
                                <a href="#">
                                    <img
                                        style={{ width: "8vw" }}
                                        src={img2}
                                        className="avatar"
                                        alt="Avatar"
                                    />
                                </a>
                            </td>
                            <td className="text-right">
                                2 hours ago<Clock />
                                <br />
                                Mia added <User2Icon />
                            </td>
                            <td className="text-right">
                                <span>Accessory Designer</span>
                                <br />
                                <span>
                                    Milan <MapPin />
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-center">
                                <a href="#">
                                    <img
                                        style={{ width: "8vw" }}
                                        src={img3}
                                        className="avatar"
                                        alt="Avatar"
                                    />
                                </a>
                            </td>
                            <td className="text-right">
                                3 hours ago<Clock />
                                <br />
                                Sophia added <User2Icon />
                            </td>
                            <td className="text-right">
                                <span>Fashion Consultant</span>
                                <br />
                                <span>
                                    Paris <MapPin />
                                </span>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>

            {/* Furniture Tab Content */}
            <div className="col-md-9 col-sm-12 col-12 tab-pane fade" 
                id="base" 
                role="tabpanel" 
                aria-labelledby="base-tab">
                <table className="table">
                    <tbody>
                    <tr>
                            <td className="text-center">
                                <a href="#">
                                    <img
                                        style={{ width: "8vw" }}
                                        src={img2}
                                        className="avatar"
                                        alt="Avatar"
                                    />
                                </a>
                            </td>
                            <td className="text-right">
                                2 hours ago<Clock />
                                <br />
                                Mia added <User2Icon />
                            </td>
                            <td className="text-right">
                                <span>Accessory Designer</span>
                                <br />
                                <span>
                                    Milan <MapPin />
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-center">
                                <a href="#">
                                    <img
                                        style={{ width: "8vw" }}
                                        src={img3}
                                        className="avatar"
                                        alt="Avatar"
                                    />
                                </a>
                            </td>
                            <td className="text-right">
                                3 hours ago<Clock />
                                <br />
                                Sophia added <User2Icon />
                            </td>
                            <td className="text-right">
                                <span>Fashion Consultant</span>
                                <br />
                                <span>
                                    Paris <MapPin />
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-center">
                                <a href="#">
                                    <img
                                        style={{ width: "8vw" }}
                                        src={img2}
                                        className="avatar"
                                        alt="Avatar"
                                    />
                                </a>
                            </td>
                            <td className="text-right">
                                2 hours ago<Clock />
                                <br />
                                Mia added <User2Icon />
                            </td>
                            <td className="text-right">
                                <span>Accessory Designer</span>
                                <br />
                                <span>
                                    Milan <MapPin />
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-center">
                                <a href="#">
                                    <img
                                        style={{ width: "8vw" }}
                                        src={img3}
                                        className="avatar"
                                        alt="Avatar"
                                    />
                                </a>
                            </td>
                            <td className="text-right">
                                3 hours ago<Clock />
                                <br />
                                Sophia added <User2Icon />
                            </td>
                            <td className="text-right">
                                <span>Fashion Consultant</span>
                                <br />
                                <span>
                                    Paris <MapPin />
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-center">
                                <a href="#">
                                    <img
                                        style={{ width: "8vw" }}
                                        src={img2}
                                        className="avatar"
                                        alt="Avatar"
                                    />
                                </a>
                            </td>
                            <td className="text-right">
                                2 hours ago<Clock />
                                <br />
                                Mia added <User2Icon />
                            </td>
                            <td className="text-right">
                                <span>Accessory Designer</span>
                                <br />
                                <span>
                                    Milan <MapPin />
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-center">
                                <a href="#">
                                    <img
                                        style={{ width: "8vw" }}
                                        src={img3}
                                        className="avatar"
                                        alt="Avatar"
                                    />
                                </a>
                            </td>
                            <td className="text-right">
                                3 hours ago<Clock />
                                <br />
                                Sophia added <User2Icon />
                            </td>
                            <td className="text-right">
                                <span>Fashion Consultant</span>
                                <br />
                                <span>
                                    Paris <MapPin />
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-center">
                                <a href="#">
                                    <img
                                        style={{ width: "8vw" }}
                                        src={img2}
                                        className="avatar"
                                        alt="Avatar"
                                    />
                                </a>
                            </td>
                            <td className="text-right">
                                2 hours ago<Clock />
                                <br />
                                Mia added <User2Icon />
                            </td>
                            <td className="text-right">
                                <span>Accessory Designer</span>
                                <br />
                                <span>
                                    Milan <MapPin />
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-center">
                                <a href="#">
                                    <img
                                        style={{ width: "8vw" }}
                                        src={img3}
                                        className="avatar"
                                        alt="Avatar"
                                    />
                                </a>
                            </td>
                            <td className="text-right">
                                3 hours ago<Clock />
                                <br />
                                Sophia added <User2Icon />
                            </td>
                            <td className="text-right">
                                <span>Fashion Consultant</span>
                                <br />
                                <span>
                                    Paris <MapPin />
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-center">
                                <a href="#">
                                    <img
                                        style={{ width: "8vw" }}
                                        src={img5}
                                        className="avatar"
                                        alt="Avatar"
                                    />
                                </a>
                            </td>
                            <td className="text-right">
                                4 hours ago<Clock />
                                <br />
                                William added <User2Icon />
                            </td>
                            <td className="text-right">
                                <span>Interior Designer</span>
                                <br />
                                <span>
                                    Stockholm <MapPin />
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
                                    />
                                </a>
                            </td>
                            <td className="text-right">
                                5 hours ago<Clock />
                                <br />
                                Isabella added <User2Icon />
                            </td>
                            <td className="text-right">
                                <span>Furniture Maker</span>
                                <br />
                                <span>
                                    Amsterdam <MapPin />
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Animals and Birds Tab Content */}
            <div className="col-md-9 col-sm-12 col-12 tab-pane fade" 
                id="animals" 
                role="tabpanel" 
                aria-labelledby="animals-tab">
                <table className="table">
                <tbody>
                        <tr>
                            <td className="text-center">
                                <a href="#">
                                    <img
                                        style={{ width: "8vw" }}
                                        src={img4}
                                        className="avatar"
                                        alt="Avatar"
                                    />
                                </a>
                            </td>
                            <td className="text-right">
                                2 minutes ago<Clock />
                                <br />
                                Shyam added <User2Icon />
                            </td>
                            <td className="text-right">
                                <span>pro max 11 vinay پرو میکس</span>
                                <br />
                                <span>
                                    Makkah <MapPin />
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
                                    />
                                </a>
                            </td>
                            <td className="text-right">
                                2 minutes ago<Clock />
                                <br />
                                Shyam added <User2Icon />
                            </td>
                            <td className="text-right">
                                <span>pro max 11 vinay پرو میکس</span>
                                <br />
                                <span>
                                    Makkah <MapPin />
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Real Estate Tab Content */}
            <div className="col-md-9 col-sm-12 col-12 tab-pane fade" 
                id="real-estate" 
                role="tabpanel" 
                aria-labelledby="real-estate-tab">
                <table className="table">
                    <tbody>
                        <tr>
                            <td className="text-center">
                                <a href="#">
                                    <img
                                        style={{ width: "8vw" }}
                                        src={img3}
                                        className="avatar"
                                        alt="Avatar"
                                    />
                                </a>
                            </td>
                            <td className="text-right">
                                10 hours ago<Clock />
                                <br />
                                Mia added <User2Icon />
                            </td>
                            <td className="text-right">
                                <span>Real Estate Agent</span>
                                <br />
                                <span>
                                    Dubai <MapPin />
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
                                    />
                                </a>
                            </td>
                            <td className="text-right">
                                11 hours ago<Clock />
                                <br />
                                Olivia added <User2Icon />
                            </td>
                            <td className="text-right">
                                <span>Property Consultant</span>
                                <br />
                                <span>
                                    Cape Town <MapPin />
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-center">
                                <a href="#">
                                    <img
                                        style={{ width: "8vw" }}
                                        src={img2}
                                        className="avatar"
                                        alt="Avatar"
                                    />
                                </a>
                            </td>
                            <td className="text-right">
                                2 hours ago<Clock />
                                <br />
                                Mia added <User2Icon />
                            </td>
                            <td className="text-right">
                                <span>Accessory Designer</span>
                                <br />
                                <span>
                                    Milan <MapPin />
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-center">
                                <a href="#">
                                    <img
                                        style={{ width: "8vw" }}
                                        src={img3}
                                        className="avatar"
                                        alt="Avatar"
                                    />
                                </a>
                            </td>
                            <td className="text-right">
                                3 hours ago<Clock />
                                <br />
                                Sophia added <User2Icon />
                            </td>
                            <td className="text-right">
                                <span>Fashion Consultant</span>
                                <br />
                                <span>
                                    Paris <MapPin />
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-center">
                                <a href="#">
                                    <img
                                        style={{ width: "8vw" }}
                                        src={img2}
                                        className="avatar"
                                        alt="Avatar"
                                    />
                                </a>
                            </td>
                            <td className="text-right">
                                2 hours ago<Clock />
                                <br />
                                Mia added <User2Icon />
                            </td>
                            <td className="text-right">
                                <span>Accessory Designer</span>
                                <br />
                                <span>
                                    Milan <MapPin />
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-center">
                                <a href="#">
                                    <img
                                        style={{ width: "8vw" }}
                                        src={img3}
                                        className="avatar"
                                        alt="Avatar"
                                    />
                                </a>
                            </td>
                            <td className="text-right">
                                3 hours ago<Clock />
                                <br />
                                Sophia added <User2Icon />
                            </td>
                            <td className="text-right">
                                <span>Fashion Consultant</span>
                                <br />
                                <span>
                                    Paris <MapPin />
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-center">
                                <a href="#">
                                    <img
                                        style={{ width: "8vw" }}
                                        src={img2}
                                        className="avatar"
                                        alt="Avatar"
                                    />
                                </a>
                            </td>
                            <td className="text-right">
                                2 hours ago<Clock />
                                <br />
                                Mia added <User2Icon />
                            </td>
                            <td className="text-right">
                                <span>Accessory Designer</span>
                                <br />
                                <span>
                                    Milan <MapPin />
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-center">
                                <a href="#">
                                    <img
                                        style={{ width: "8vw" }}
                                        src={img3}
                                        className="avatar"
                                        alt="Avatar"
                                    />
                                </a>
                            </td>
                            <td className="text-right">
                                3 hours ago<Clock />
                                <br />
                                Sophia added <User2Icon />
                            </td>
                            <td className="text-right">
                                <span>Fashion Consultant</span>
                                <br />
                                <span>
                                    Paris <MapPin />
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-center">
                                <a href="#">
                                    <img
                                        style={{ width: "8vw" }}
                                        src={img2}
                                        className="avatar"
                                        alt="Avatar"
                                    />
                                </a>
                            </td>
                            <td className="text-right">
                                2 hours ago<Clock />
                                <br />
                                Mia added <User2Icon />
                            </td>
                            <td className="text-right">
                                <span>Accessory Designer</span>
                                <br />
                                <span>
                                    Milan <MapPin />
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-center">
                                <a href="#">
                                    <img
                                        style={{ width: "8vw" }}
                                        src={img3}
                                        className="avatar"
                                        alt="Avatar"
                                    />
                                </a>
                            </td>
                            <td className="text-right">
                                3 hours ago<Clock />
                                <br />
                                Sophia added <User2Icon />
                            </td>
                            <td className="text-right">
                                <span>Fashion Consultant</span>
                                <br />
                                <span>
                                    Paris <MapPin />
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-center">
                                <a href="#">
                                    <img
                                        style={{ width: "8vw" }}
                                        src={img2}
                                        className="avatar"
                                        alt="Avatar"
                                    />
                                </a>
                            </td>
                            <td className="text-right">
                                2 hours ago<Clock />
                                <br />
                                Mia added <User2Icon />
                            </td>
                            <td className="text-right">
                                <span>Accessory Designer</span>
                                <br />
                                <span>
                                    Milan <MapPin />
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-center">
                                <a href="#">
                                    <img
                                        style={{ width: "8vw" }}
                                        src={img3}
                                        className="avatar"
                                        alt="Avatar"
                                    />
                                </a>
                            </td>
                            <td className="text-right">
                                3 hours ago<Clock />
                                <br />
                                Sophia added <User2Icon />
                            </td>
                            <td className="text-right">
                                <span>Fashion Consultant</span>
                                <br />
                                <span>
                                    Paris <MapPin />
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-center">
                                <a href="#">
                                    <img
                                        style={{ width: "8vw" }}
                                        src={img2}
                                        className="avatar"
                                        alt="Avatar"
                                    />
                                </a>
                            </td>
                            <td className="text-right">
                                2 hours ago<Clock />
                                <br />
                                Mia added <User2Icon />
                            </td>
                            <td className="text-right">
                                <span>Accessory Designer</span>
                                <br />
                                <span>
                                    Milan <MapPin />
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-center">
                                <a href="#">
                                    <img
                                        style={{ width: "8vw" }}
                                        src={img3}
                                        className="avatar"
                                        alt="Avatar"
                                    />
                                </a>
                            </td>
                            <td className="text-right">
                                3 hours ago<Clock />
                                <br />
                                Sophia added <User2Icon />
                            </td>
                            <td className="text-right">
                                <span>Fashion Consultant</span>
                                <br />
                                <span>
                                    Paris <MapPin />
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-center">
                                <a href="#">
                                    <img
                                        style={{ width: "8vw" }}
                                        src={img2}
                                        className="avatar"
                                        alt="Avatar"
                                    />
                                </a>
                            </td>
                            <td className="text-right">
                                2 hours ago<Clock />
                                <br />
                                Mia added <User2Icon />
                            </td>
                            <td className="text-right">
                                <span>Accessory Designer</span>
                                <br />
                                <span>
                                    Milan <MapPin />
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-center">
                                <a href="#">
                                    <img
                                        style={{ width: "8vw" }}
                                        src={img3}
                                        className="avatar"
                                        alt="Avatar"
                                    />
                                </a>
                            </td>
                            <td className="text-right">
                                3 hours ago<Clock />
                                <br />
                                Sophia added <User2Icon />
                            </td>
                            <td className="text-right">
                                <span>Fashion Consultant</span>
                                <br />
                                <span>
                                    Paris <MapPin />
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-center">
                                <a href="#">
                                    <img
                                        style={{ width: "8vw" }}
                                        src={img2}
                                        className="avatar"
                                        alt="Avatar"
                                    />
                                </a>
                            </td>
                            <td className="text-right">
                                2 hours ago<Clock />
                                <br />
                                Mia added <User2Icon />
                            </td>
                            <td className="text-right">
                                <span>Accessory Designer</span>
                                <br />
                                <span>
                                    Milan <MapPin />
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-center">
                                <a href="#">
                                    <img
                                        style={{ width: "8vw" }}
                                        src={img3}
                                        className="avatar"
                                        alt="Avatar"
                                    />
                                </a>
                            </td>
                            <td className="text-right">
                                3 hours ago<Clock />
                                <br />
                                Sophia added <User2Icon />
                            </td>
                            <td className="text-right">
                                <span>Fashion Consultant</span>
                                <br />
                                <span>
                                    Paris <MapPin />
                                </span>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>

            {/* Cars Tab Content */}
            <div className="col-md-9 col-sm-12 col-12 tab-pane fade" 
                id="cars" 
                role="tabpanel" 
                aria-labelledby="cars-tab">
                <table className="table">
                    <tbody>
                    <tr>
                            <td className="text-center">
                                <a href="#">
                                    <img
                                        style={{ width: "8vw" }}
                                        src={img2}
                                        className="avatar"
                                        alt="Avatar"
                                    />
                                </a>
                            </td>
                            <td className="text-right">
                                2 hours ago<Clock />
                                <br />
                                Mia added <User2Icon />
                            </td>
                            <td className="text-right">
                                <span>Accessory Designer</span>
                                <br />
                                <span>
                                    Milan <MapPin />
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-center">
                                <a href="#">
                                    <img
                                        style={{ width: "8vw" }}
                                        src={img3}
                                        className="avatar"
                                        alt="Avatar"
                                    />
                                </a>
                            </td>
                            <td className="text-right">
                                3 hours ago<Clock />
                                <br />
                                Sophia added <User2Icon />
                            </td>
                            <td className="text-right">
                                <span>Fashion Consultant</span>
                                <br />
                                <span>
                                    Paris <MapPin />
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-center">
                                <a href="#">
                                    <img
                                        style={{ width: "8vw" }}
                                        src={img2}
                                        className="avatar"
                                        alt="Avatar"
                                    />
                                </a>
                            </td>
                            <td className="text-right">
                                2 hours ago<Clock />
                                <br />
                                Mia added <User2Icon />
                            </td>
                            <td className="text-right">
                                <span>Accessory Designer</span>
                                <br />
                                <span>
                                    Milan <MapPin />
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-center">
                                <a href="#">
                                    <img
                                        style={{ width: "8vw" }}
                                        src={img3}
                                        className="avatar"
                                        alt="Avatar"
                                    />
                                </a>
                            </td>
                            <td className="text-right">
                                3 hours ago<Clock />
                                <br />
                                Sophia added <User2Icon />
                            </td>
                            <td className="text-right">
                                <span>Fashion Consultant</span>
                                <br />
                                <span>
                                    Paris <MapPin />
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-center">
                                <a href="#">
                                    <img
                                        style={{ width: "8vw" }}
                                        src={img2}
                                        className="avatar"
                                        alt="Avatar"
                                    />
                                </a>
                            </td>
                            <td className="text-right">
                                2 hours ago<Clock />
                                <br />
                                Mia added <User2Icon />
                            </td>
                            <td className="text-right">
                                <span>Accessory Designer</span>
                                <br />
                                <span>
                                    Milan <MapPin />
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-center">
                                <a href="#">
                                    <img
                                        style={{ width: "8vw" }}
                                        src={img3}
                                        className="avatar"
                                        alt="Avatar"
                                    />
                                </a>
                            </td>
                            <td className="text-right">
                                3 hours ago<Clock />
                                <br />
                                Sophia added <User2Icon />
                            </td>
                            <td className="text-right">
                                <span>Fashion Consultant</span>
                                <br />
                                <span>
                                    Paris <MapPin />
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-center">
                                <a href="#">
                                    <img
                                        style={{ width: "8vw" }}
                                        src={img2}
                                        className="avatar"
                                        alt="Avatar"
                                    />
                                </a>
                            </td>
                            <td className="text-right">
                                2 hours ago<Clock />
                                <br />
                                Mia added <User2Icon />
                            </td>
                            <td className="text-right">
                                <span>Accessory Designer</span>
                                <br />
                                <span>
                                    Milan <MapPin />
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-center">
                                <a href="#">
                                    <img
                                        style={{ width: "8vw" }}
                                        src={img3}
                                        className="avatar"
                                        alt="Avatar"
                                    />
                                </a>
                            </td>
                            <td className="text-right">
                                3 hours ago<Clock />
                                <br />
                                Sophia added <User2Icon />
                            </td>
                            <td className="text-right">
                                <span>Fashion Consultant</span>
                                <br />
                                <span>
                                    Paris <MapPin />
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-center">
                                <a href="#">
                                    <img
                                        style={{ width: "8vw" }}
                                        src={img2}
                                        className="avatar"
                                        alt="Avatar"
                                    />
                                </a>
                            </td>
                            <td className="text-right">
                                2 hours ago<Clock />
                                <br />
                                Mia added <User2Icon />
                            </td>
                            <td className="text-right">
                                <span>Accessory Designer</span>
                                <br />
                                <span>
                                    Milan <MapPin />
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-center">
                                <a href="#">
                                    <img
                                        style={{ width: "8vw" }}
                                        src={img3}
                                        className="avatar"
                                        alt="Avatar"
                                    />
                                </a>
                            </td>
                            <td className="text-right">
                                3 hours ago<Clock />
                                <br />
                                Sophia added <User2Icon />
                            </td>
                            <td className="text-right">
                                <span>Fashion Consultant</span>
                                <br />
                                <span>
                                    Paris <MapPin />
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-center">
                                <a href="#">
                                    <img
                                        style={{ width: "8vw" }}
                                        src={img2}
                                        className="avatar"
                                        alt="Avatar"
                                    />
                                </a>
                            </td>
                            <td className="text-right">
                                2 hours ago<Clock />
                                <br />
                                Mia added <User2Icon />
                            </td>
                            <td className="text-right">
                                <span>Accessory Designer</span>
                                <br />
                                <span>
                                    Milan <MapPin />
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-center">
                                <a href="#">
                                    <img
                                        style={{ width: "8vw" }}
                                        src={img3}
                                        className="avatar"
                                        alt="Avatar"
                                    />
                                </a>
                            </td>
                            <td className="text-right">
                                3 hours ago<Clock />
                                <br />
                                Sophia added <User2Icon />
                            </td>
                            <td className="text-right">
                                <span>Fashion Consultant</span>
                                <br />
                                <span>
                                    Paris <MapPin />
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-center">
                                <a href="#">
                                    <img
                                        style={{ width: "8vw" }}
                                        src={img2}
                                        className="avatar"
                                        alt="Avatar"
                                    />
                                </a>
                            </td>
                            <td className="text-right">
                                2 hours ago<Clock />
                                <br />
                                Mia added <User2Icon />
                            </td>
                            <td className="text-right">
                                <span>Accessory Designer</span>
                                <br />
                                <span>
                                    Milan <MapPin />
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-center">
                                <a href="#">
                                    <img
                                        style={{ width: "8vw" }}
                                        src={img3}
                                        className="avatar"
                                        alt="Avatar"
                                    />
                                </a>
                            </td>
                            <td className="text-right">
                                3 hours ago<Clock />
                                <br />
                                Sophia added <User2Icon />
                            </td>
                            <td className="text-right">
                                <span>Fashion Consultant</span>
                                <br />
                                <span>
                                    Paris <MapPin />
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-center">
                                <a href="#">
                                    <img
                                        style={{ width: "8vw" }}
                                        src={img2}
                                        className="avatar"
                                        alt="Avatar"
                                    />
                                </a>
                            </td>
                            <td className="text-right">
                                2 hours ago<Clock />
                                <br />
                                Mia added <User2Icon />
                            </td>
                            <td className="text-right">
                                <span>Accessory Designer</span>
                                <br />
                                <span>
                                    Milan <MapPin />
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-center">
                                <a href="#">
                                    <img
                                        style={{ width: "8vw" }}
                                        src={img3}
                                        className="avatar"
                                        alt="Avatar"
                                    />
                                </a>
                            </td>
                            <td className="text-right">
                                3 hours ago<Clock />
                                <br />
                                Sophia added <User2Icon />
                            </td>
                            <td className="text-right">
                                <span>Fashion Consultant</span>
                                <br />
                                <span>
                                    Paris <MapPin />
                                </span>
                            </td>
                        </tr>

                        <tr>
                            <td className="text-center">
                                <a href="#">
                                    <img
                                        style={{ width: "8vw" }}
                                        src={img5}
                                        className="avatar"
                                        alt="Avatar"
                                    />
                                </a>
                            </td>
                            <td className="text-right">
                                12 hours ago<Clock />
                                <br />
                                Liam added <User2Icon />
                            </td>
                            <td className="text-right">
                                <span>Car Salesperson</span>
                                <br />
                                <span>
                                    Los Angeles <MapPin />
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
                                    />
                                </a>
                            </td>
                            <td className="text-right">
                                13 hours ago<Clock />
                                <br />
                                Sophia added <User2Icon />
                            </td>
                            <td className="text-right">
                                <span>Automobile Expert</span>
                                <br />
                                <span>
                                    Miami <MapPin />
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default TabContent;
