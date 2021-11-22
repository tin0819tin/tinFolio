import React, {useContext} from "react";
import "./mySkill.scss";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import {illustration, skillsSection} from "../../portfolio";
import {Fade} from "react-reveal";
import myWorkspace from "../../assets/lottie/workspace.json";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";
import {SiDotnet, SiHtml5, SiCss3, SiJavascript, SiReact, 
    SiNodedotjs, SiFlask, SiNpm, SiMicrosoftsqlserver, SiNeo4J,
    SiMongodb, SiGit, SiMicrosoftazure, SiAmazonaws, SiGooglecloud,
    SiDocker, SiKubernetes, SiPython, SiCplusplus, SiCsharp,
    SiJava, } from 'react-icons/si'



export default function MySkill(props) {
    const {isDark} = useContext(StyleContext);
    if (!skillsSection.display) {
        return null;
    }
    const iconMap = {
        ".NET core" : SiDotnet,
        "html-5" : SiHtml5,
        "css3" : SiCss3,
        "JavaScript": SiJavascript,
        "reactjs" : SiReact,
        "nodejs" : SiNodedotjs,
        "Flask" : SiFlask,
        "npm" : SiNpm,
        "sql-database" : SiMicrosoftsqlserver,
        "Neo4j" : SiNeo4J,
        "MongoDB" : SiMongodb,
        "Git" : SiGit,
        "Azure" : SiMicrosoftazure,
        "AWS" : SiAmazonaws,
        "GCP" : SiGooglecloud,
        "Docker" : SiDocker, 
        "Kubernetes" : SiKubernetes,
        "Python" : SiPython,
        "C/C++" : SiCplusplus,
        "C#" : SiCsharp,
        "Java" : SiJava,
    } 

    const renderIcon = () => {
        
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
                            <ul className="skill-logo-container">
                                {skill.softwareSkills.map((skillLogo, k) => {
                                    const ToolIcon = iconMap[skillLogo.skillName];
                                    // console.log(skillLogo.skillName);
                                    
                                    return(
                                        <li
                                            key={k}
                                            className="software-skill-inline"
                                            name={skillLogo.skillName}
                                        >
                                        <ToolIcon style=""/>
                                        {/* <i className={skillLogo.fontAwesomeClassname}></i> */}
                                        <p>{skillLogo.skillName}</p>
                                        </li>
                                        // <img 
                                        //     src="https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg"
                                        // />
                                    );
                                })}
                            </ul>
                        </div>
                    );
                })}
            </div>
        </div>
    );
    
}