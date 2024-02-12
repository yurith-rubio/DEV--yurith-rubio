import {useState, useEffect} from 'react';
import svggirl from "/intro-girl.svg";
import {useContext} from "react";
import {ThemeContext} from "./ThemeContext.jsx";
import Services from './Services.jsx';
import Projects from './Projects.jsx';
import About from './About.jsx';
import Contact from "./Contact.jsx";

export default function Home() {
    const context = useContext(ThemeContext);
    const [delayedOneSec, setDelayOneSec] = useState(false);

    useEffect(() => {
        setDelayOneSec(true);
    },[])

    return <>
        <div id='mainIntro' className={ context.theme === 'active' ? 'light-background hidden' : 'light-background' }>
            <div className='content-boundary full-height'>
                <h1 className='intro-heading'><span className='h1-main text-up'>Creative <br></br>Frontend Development<br></br></span>
                {delayedOneSec && 
                    <span className='intro-subheading text-up delayed-oneSec'>that blends aesthetics with functionality</span>       
                }
                </h1>
                <img src={svggirl} className='intro-girl' />
            </div>
        </div>
        <Services />
        <Projects />
        <About />
        <Contact />
    </>
}