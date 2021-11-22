import React, {useContext} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import {
  greeting,
  workExperiences,
  skillsSection,
  openSource,
  blogSection,
  talkSection,
  achievementSection
} from "../../portfolio";
import { Fragment } from "react";

function Header() {
  const {isDark} = useContext(StyleContext);
  const viewExperience = workExperiences.display;
  const viewOpenSource = openSource.display;
  const viewSkills = skillsSection.display;
  const viewAchievement = achievementSection.display;
  const viewBlog = blogSection.display;
  const viewTalks = talkSection.display;

  const scrollHeader = () => {
    const header = document.getElementById("header");

  }

  return (
    <Headroom>
      <header id="header" className={isDark ? "dark-menu header" : "header"}>
        <a href="/" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name left">Guan</span>
          <span className="logo-name2"> Tin</span>
          <span className="logo-name right">g</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{color: "white"}}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          {viewSkills && (
            <li>
              <a href="#skills">Skills</a>
              <div className="header-button-border"></div>
            </li>
          )}
          {viewExperience && (
            <li>
              <a href="#experience">Work Experience</a>
              <div className="header-button-border"></div>
            </li>
          )}
          {viewOpenSource && (
            <li>
              <a href="#opensource">Projects</a>
              <div className="header-button-border"></div>
            </li>
          )}
          {viewAchievement && (
            <li>
              <a href="#achievements">Achievements</a>
              <div className="header-button-border"></div>
            </li>
          )}
          {viewBlog && (
            <li>
              <a href="#blogs">Writings</a>
              <div className="header-button-border"></div>
            </li>
          )}
          {viewTalks && (
            <li>
              <a href="#talks">Talks</a>
              <div className="header-button-border"></div>
            </li>
          )}
          <li>
            <a href="#contact">Contact Me</a>
            <div className="header-button-border"></div>
          </li>
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>
              {/* <ToggleSwitch /> */}
            </a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
