import {NavLink, Outlet, Navigate} from "react-router-dom";
import AboutInfo from "./AboutInfo";
import AboutJobs from "./AboutJobs";
import { useState } from "react";
import {useContext} from "react";
import {ThemeContext} from "./ThemeContext.jsx";

export default function About() {
    const context = useContext(ThemeContext);
    const [aboutSelected, setAboutSelected] = useState(true);
    const [experienceSelected, setExperienceSelected] = useState(false);
    
    function handleClickButton() {
        context.toggleAbout();
        if (aboutSelected == true) {
            setAboutSelected(false);
            setExperienceSelected(true);
        } else {
            setAboutSelected(true);
            setExperienceSelected(false);
        }
    }

    return <>
        <section id="About" className={context.theme === 'active' ? 'hidden' : ''}>
            <div className="about-wrapper">
                <div className="about left-side">
                    <div className="profile-picture" style={{backgroundImage: "url('/yurith-rubio-profile-picture-retro.jpeg')"}}>
                    </div>
                    <div className="about left-info">
                        {aboutSelected ?
                            <div className="about name">About me
                                <ul className="yurith-info">
                                    <li>Yurith Rubio</li>
                                    <li>40 years old</li>
                                    <li>Mexican</li>
                                    <li>Frontend developer</li>
                                    <li>M.A. Integrated Design</li>
                                    <li>I speak Spanish(Native) - English(C2) - German(C1)</li>
                                </ul>
                            </div> : 
                            <div className="about name">My expertise:
                                <ul className="yurith-info">
                                    <li>HTML/CSS</li>
                                    <li>Javascript/Typescript</li>
                                    <li>ReactJS/D3</li>
                                    <li>SQL</li>
                                    <li>Python/Dash/Matplotlib</li>
                                    <li>Git/Github</li>
                                    <li>Figma/Adobe Illustrator/Adobe Photoshop</li>
                                </ul>
                            </div>
                        }
                    </div>
                </div>
                <div className="about right-side">
                    <div className="about nav">
                        <button className={aboutSelected ? "selected" : ""} onClick={handleClickButton}>ABOUT ME</button>
                        <button className={experienceSelected ? "selected" : ""} onClick={handleClickButton}>EXPERIENCE</button>
                    </div>
                    <div className="about right-info">
                        <AboutInfo />
                        <AboutJobs />
                    </div>
                </div>
            </div>
        </section>
    </>
}