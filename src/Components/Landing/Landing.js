import React, { Component } from "react";
import "./Landing.scss";
import Particle from "./Particle";
import newPort from "./new_port.svg";
import linkedin from "./linkedin.svg";
import github from "./github.svg";
import { NavLink } from "react-router-dom";

export default class Landing extends Component {
  render() {
    return (
      <div className="landing-background">
        <Particle />
        <div className="item-background">
          <div className="main-container">
            <img className="image" src={newPort} alt="self-logo" />
            <div className="h1">ISAAC HANSEN</div>
            <div className="h3">FULL-STACK WEB DEVELOPER</div>
            <div className="button-container">
              <button className="button">
                <a href="https://drive.google.com/file/d/133ATawzcPZnshm_NE5ReGBxHikWLbAJb/view?usp=sharing">
                  RESUME
                </a>
              </button>
              <NavLink to="/projects">
                <button className="button">PROJECTS</button>
              </NavLink>
            </div>
            <div className="contact">
              <a href="https://www.linkedin.com/in/isaac-hansen-dev/">
                <img
                  className="link-img contact-img"
                  src={linkedin}
                  alt="linkedin"
                />
              </a>
              <a href="https://www.github.com/isaachansen">
                <img
                  className="git-img contact-img"
                  src={github}
                  alt="github"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
