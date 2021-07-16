import React, {useContext} from "react";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import './Experience.scss';
import {Chrono} from "react-chrono";
import WorkExperienceTL from "./workExperienceTL";
import EducationTL from "./educationTL";

export default function Experience() {
    const {isDark} = useContext(StyleContext);

    return (
        <div class="experience-container" id="experience">
            <WorkExperienceTL />
            <EducationTL />
        </div>

    );

}