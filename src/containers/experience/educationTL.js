import React, {createRef, useContext} from "react";
import StyleContext from "../../contexts/StyleContext";
import './Experience.scss';


export default function EducationTL () {
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
                <li>
                    <div className="content">
                        <h3>A timeline?</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quam felis, rutrum nec enim non, sodales facilisis purus. Vestibulum viverra egestas ipsum eget commodo. Nullam aliquet lorem vitae nulla dictum vestibulum sed quis tellus. Sed diam diam, facilisis tincidunt volutpat nec, auctor quis magna. Proin sed nunc iaculis ipsum scelerisque tincidunt. Cras eleifend leo tellus, fermentum finibus tortor fringilla eu.
                        </p>
                    </div>
                </li>
                <li>
                    <div className="content">
                        <h3>A railway map?</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quam felis, rutrum nec enim non, sodales facilisis purus. Vestibulum viverra egestas ipsum eget commodo. Nullam aliquet lorem vitae nulla dictum vestibulum sed quis tellus. Sed diam diam, facilisis tincidunt volutpat nec, auctor quis magna. Proin sed nunc iaculis ipsum scelerisque tincidunt. Cras eleifend leo tellus, fermentum finibus tortor fringilla eu.
                        </p>
                    </div>
                </li>
            </ul>							
        </div>
    </section>
    );
}