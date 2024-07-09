import studies from "../AboutStudies.json";
import {useContext} from "react";
import { ThemeContext } from "../ThemeContext.jsx";

export default function AboutJobs() {
    const context = useContext(ThemeContext);
    const studies_list = Object.entries(studies.studies).map(study => {
        return <div key={study}>
        <div >{study[1].date}</div>
        <h2 className="job-heading">{study[1].heading}</h2>
        <p className="job-description">{study[1].description}</p>
        </div>
    });

    return <>
        <div className={context.showStudies ? "" : "hidden"} >
            {studies_list}
        </div>
    </>
}