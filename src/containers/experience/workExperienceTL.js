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

    const GetDescTags = ({tags}) => {
        return tags
        ? tags.map((tag, i) => (
            // <div></div>
            <span key={i} className="experinece-tag">
                {tag} 
            </span>
            
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
                                            <h3  >{card.role} </h3>
                                            <h5>{card.date}</h5>
                                            <h3 className="experience-company">{card.company}</h3>
                                        </div>
                                        <ul className="experience-bullet">
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
                                <div className="experinece-tag-container">
                                    <GetDescTags tags={card.tags}/>
                                </div>
                            </li>
                        ); 
                    })}
                    
                </ul>							
            </div>
        </section>

    );
}