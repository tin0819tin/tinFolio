import React, {useContext} from "react";
import "./mySkill.scss";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import {illustration, skillsSection} from "../../portfolio";
import {Fade} from "react-reveal";
import myWorkspace from "../../assets/lottie/workspace.json";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";


export default function MySkill(props) {
    const {isDark} = useContext(StyleContext);
    if (!skillsSection.display) {
        return null;
    }



    return (
        <div className={isDark ? "dark-mode myskill-container" : "myskill-container"} id="skills">
            <div className="myskill-header">
                <h2>Skill</h2>
            </div>
            <div className="myskill-sections">
                {skillsSection.mySkills.map((skill, i) => {
                    return(
                        <div key={i} className="myskill-section">
                            <h3>{skill.skillSummary}</h3>
                            <div className="skill-logo-container">
                                {skill.softwareSkills.map((skillLogo, k) => {
                                    return(
                                        <i className={skillLogo.fontAwesomeClassname}></i>
                                        // <img 
                                        //     src="https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg"
                                        // />
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
    
}