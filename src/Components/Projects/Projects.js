import React, { Component } from "react";
import { TiArrowLeftThick } from "react-icons/ti";
import { NavLink } from "react-router-dom";
import "./Projects.scss";

export default class Projects extends Component {
  render() {
    return (
      <div className="projects-background">
          <NavLink to='/'>
        <TiArrowLeftThick className="arrow" />
          </NavLink>
        <div className="project-grid">
            <div className="project-1">
                <div className="img-loc"></div>
                <div className="paragraph"></div>
                <div className="pro-links"></div>
            </div>
            <div className="project-2">
                <div className="img-loc"></div>
                <div className="paragraph"></div>
                <div className="pro-links"></div>
            </div>
            <div className="project-3">
                <div className="img-loc"></div>
                <div className="paragraph"></div>
                <div className="pro-links"></div>
            </div>
        </div>
      </div>
    );
  }
}
