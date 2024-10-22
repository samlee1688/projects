import React, {useState} from "react";
import HwSet from './HwSet.jsx';

const ProjectRow = ({project}) => {
    return (
        <div className="row-template">
            <h2 className="project-name">Project Name: {project.projectName}</h2>
            <h4 className="project-user">Authorized Users: {project.authorizedUsers.join(', ')}</h4>
            <div className="project-set" style={{flexDirection: "column"}}>
                {project.hwSets.map((set) => (
                    <HwSet set={set}/>
                ))}
            </div>
            
        </div>
    )
}

export default ProjectRow;