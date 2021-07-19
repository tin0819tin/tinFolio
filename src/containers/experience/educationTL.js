import React, {createRef, useContext} from "react";
import StyleContext from "../../contexts/StyleContext";
import './Experience.scss';
import {educationInfo} from "../../portfolio";


export default function EducationTL () {


    const GetDescBullets = ({descBullets}) => {
        return descBullets
          ? descBullets.map((item, i) => (
              <li key={i} className="subTitle">
                {item}
              </li>
            ))
          : null;
      };

    return (
        <section className="block-content t-block-teal l-block-spacing">
        <div className="l-contained">
            <header className="heading-group">
                <h2 className="experience-heading">Education</h2>
                {/* <p class="subtitle">
                    What is this?
                </p> */}
            </header>
            <ul className="timeline-list">
            {educationInfo.schools.map((card, index) => {
                        return(
                            <li key={index}>
                                <div className="experience-cards">
                                    <div className="content">
                                        <div className="content-header">
                                            <h3>{card.schoolName} </h3>
                                            <h5 className="school-subheader">{card.subHeader}</h5>
                                            <h5>{card.duration}</h5>
                                        </div>
                                        <h4>{card.desc}</h4>
                                    </div>
                                    <div className="experience-logo-container">
                                        <img 
                                            className="experience-logo round"
                                            src={card.logo}
                                        />
                                    </div>
                        
                                </div>
                            </li>
                        ); 
                    })}
            </ul>							
        </div>
    </section>
    );
}