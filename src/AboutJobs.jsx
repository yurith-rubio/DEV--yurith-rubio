import experience from "./AboutJobs.json";
import {useContext} from "react";
import { ThemeContext } from "./ThemeContext.jsx";

export default function AboutJobs() {
    const context = useContext(ThemeContext);
    const jobs = Object.entries(experience.jobs).map(job => {
        return <div key={job}>
        <div >{job[1].date}</div>
        <h2 className="job-heading">{job[1].heading}</h2>
        <p className="job-description">{job[1].description}</p>
        </div>
    });

    return <>
        <div className={context.showJobs ? "" : "hidden"} >
            {jobs}
        </div>
    </>
}