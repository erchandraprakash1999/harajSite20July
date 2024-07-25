import React from "react";
import { useState } from "react";
import TabContent from "./TabContent";
import { NavLink } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { counterContext } from "../contexts/ActiveTabContexts";
import { useContext } from "react";
const DetailedView = ({ item, onBack }) => {
    const { show, notShow} = useContext(counterContext);
  return (
    <>

    {!show?
  <div className="jumbotron">
  <div className="detailed-view row">
    <div className="col-md-6"></div>
      
      <h2>Details</h2>
      <img
        style={{ width: "50vw" }}
        src={item.img}
        alt="Detailed View"
      />
      <p>Time: {item.time}</p>
      <p>Added By: {item.addedBy}</p>
      <p>Position: {item.position}</p>
      <p>Location: {item.location}</p>
    </div>
    </div>:<TabContent></TabContent>}
    </>
  );
};

export default DetailedView;
