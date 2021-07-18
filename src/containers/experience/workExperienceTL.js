import React, {createRef, useContext} from "react";
import StyleContext from "../../contexts/StyleContext";
import './Experience.scss';
import {workExperiences} from "../../portfolio";

export default function WorkExperienceTL () {
    const {isDark} = useContext(StyleContext);

    const GetDescBullets = ({descBullets}) => {
        return descBullets
          ? descBullets.map((item, i) => (
              <li key={i} className="subTitle">
                <p>{item}</p>
              </li>
            ))
          : null;
      };

    return (
        <section className="block-content t-block-teal l-block-spacing">
            <div className="l-contained">
                <header className="heading-group">
                    <h2 className="experience-heading">Work</h2>
                    {/* <p class="subtitle">
                        What is this?
                    </p> */}
                </header>
                <ul className="timeline-list">
                    {workExperiences.experience.map((card, index) => {
                        return(
                            <li key={index}>
                                <div className="experience-cards">
                                    <div className="content">
                                        <div className="content-header">
                                            <h3 style={{marginBottom:""}}>{card.role} </h3>
                                            <h5>{card.date}</h5>
                                            <h3 className="experience-company">{card.company}</h3>
                                        </div>
                                        <ul>
                                            <GetDescBullets descBullets={card.descBullets}/>
                                        </ul>
                                    </div>
                                    <div className="experience-logo-container">
                                        <img 
                                            className="experience-logo"
                                            src={card.companylogo}
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