import React from "react";
import me from "../src/images/me.png.png";
import about from "../src/images/about.png";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Common from "./Common";

import "./App.css";
import { NavLink, Route, Switch } from "react-router-dom";

function Home() {
  return (
    <>
      <Common
        name="Grow your business with "
        strong="Asjad Baig"
        word="We are the team of talented developers making Awesome
     Websites"
        para="Get Started"
        link="/service"
        image={me}
      />
    </>
  );
}

export default Home;
