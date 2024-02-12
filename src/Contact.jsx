import {useContext} from "react";
import { ThemeContext } from "./ThemeContext.jsx";

export default function Contact() {
    const context = useContext(ThemeContext);

    return <section id="Contact" className={context.theme === 'active' ? "center text-light-green hidden" : "center text-light-green"}>
        <div className="contact-wrapper">
            <p>
            If you have any questions, please contact me through:
            </p>
            <p>
            My email: <b>iamyurith@gmail.com</b>
            </p>
            <p>
            My <a className='underlined-link' href="https://www.linkedin.com/in/yurith/" target="_blank" >Linkedin</a>
            </p>
        </div>
    </section>
    
}