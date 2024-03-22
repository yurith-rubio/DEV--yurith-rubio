import Path from '../Path.jsx';
import { useContext } from "react";
import {ThemeContext} from "../ThemeContext.jsx";

export default function ServiceBall(props) {
    const { tag, textClassName, id, disabled, isVisible } = props;
    const { isMobile } = useContext(ThemeContext);

    return <>
        <div id={`ball-${id}`} className="service-ball-content">
            <div className={`service-ball-info ${textClassName}`} dangerouslySetInnerHTML={{__html: tag}}></div>
            {/* <img src={arrow} className={`service-ball-arrow ${arrowClassName}`} /> */}
            <a href={"#" + id} section={id} className='button nav-ball-button'>
                <svg className="svg-service-ball" viewBox={ isMobile ? "0 0 150 150" : "0 0 200 200" } >
                    <Path isVisible={isVisible} disabled={disabled}/>
                </svg>
            </a>
        </div>
    </>
}