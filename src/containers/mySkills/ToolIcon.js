import React, {useContext} from "react";
import "./mySkill.scss";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import {illustration, skillsSection} from "../../portfolio";
import {Fade} from "react-reveal";
import myWorkspace from "../../assets/lottie/workspace.json";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";
import Radium from 'radium';

// function ToolIcon (props) {

//     var style = {
//         // color: props.skillLogo.color,
//         ':visited' : {
//             color : props.skillLogo.color
//         }
//     }
//     var TToolIcon = props.TToolIcon;
//     return(
//         <li
//             // key={props.k}
//             className="software-skill-inline"
//             name={props.skillLogo.skillName}
//         >
//         <TToolIcon className="toolIcon" style={style}/>
//         {/* <i className={skillLogo.fontAwesomeClassname}></i> */}
//         <p>{props.skillLogo.skillName}</p>
//         </li>
//     );
    

// }

// export default Radium(ToolIcon);





class ToolIcon extends React.Component {

    render() {
        var TToolIcon = this.props.TToolIcon;

        var style = {
            // color: "#2496ED",
            ':hover' : {
                color : this.props.color
            }
        }
        return(
            <li
                // key={props.k}
                className="software-skill-inline"
                name={this.props.skillLogo.skillName}
            >
            <TToolIcon className={this.props.skillLogo.style} style={style}/>
            {/* <i className={skillLogo.fontAwesomeClassname}></i> */}
            <p>{this.props.skillLogo.skillName}</p>
            </li>
        );
    }
}

export default Radium(ToolIcon);
