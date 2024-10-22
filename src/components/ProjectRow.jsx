import React, {useState} from "react";
import HwSet from './HwSet.jsx';
import Button from '@mui/material/Button';

const ProjectRow = ({project}) => {

    const [joined, updateJoined] = useState(false);

    const statusButton = () => {
        if(joined === false){
            return (
                <Button onClick={handleJoin} variant="contained" size="medium" color="success">Join Project</Button>
            );

        } else {
            return (
                <Button onClick={handleLeave} variant="contained" size="medium" color="error">Leave Project</Button>
            );
        }
    }

    const handleJoin = () => {
        updateJoined(true);
    }

    const handleLeave = () => {
        updateJoined(false);
    }

    return (
        <div className="row-template">
            <h2 className="project-name">Project Name: {project.projectName}</h2>
            <h4 className="project-user">Authorized Users: {project.authorizedUsers.join(', ')}</h4>
            <div className="project-set" style={{flexDirection: "column"}}>
                {project.hwSets.map((set) => (
                    <HwSet set={set}/>
                ))}
            </div>
            {statusButton()}
            
        </div>
    )
}

export default ProjectRow;