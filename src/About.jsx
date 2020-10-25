import React from "react";
import me from "../src/images/me.png.png";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Common from "./Common";
import about from "../src/images/about.png";

import "./App.css";
import { NavLink, Route, Switch } from "react-router-dom";

function About() {
  return (
    <>
      <Common
        name="This is our  "
        strong=" Contact page"
        word="We are alwasy there to help you out"
        para="Contact us"
        link="/contact"
        image={about}
      />
    </>
  );
}

export default About;
