import React from "react";
import { NavLink } from "react-router-dom";

import "./App.css";

function Card(props) {
  return (
    <>
      <div className="col-md-4 col-sm-4 mx-auto col-10">
        <div className="card  " style={{ width: "18rem" }}>
          <img src={props.src} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title font-weight-bold">{props.title}</h5>
            <p className="card-text">{props.body}</p>
            <NavLink to="#" className="btn ">
              <div className="btnyellow">Click to know more</div>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
