import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import "./App.css";
import { NavLink, Route, Switch } from "react-router-dom";

function Common(props) {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    {props.name}
                    <stong className="brand-name">{props.strong}</stong>
                  </h1>
                  <h2 className="my-3">{props.word}</h2>
                  <div className="mt-3">
                    <NavLink to={props.link} className="btn-get-started">
                      {props.para}
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src={props.image}
                    className="img-fluid animated"
                    alt="homeimg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Common;
