import React, {useState} from "react";
import Button from '@mui/material/Button';

const HwSet = ({set}) => {
    const [checkedOutQty, setCheckedOutQty] = useState(0);
    const [valToUpdate, setValToUpdate] = useState(0);

    const handleCheckIn = (props) => {
        props.preventDefault();
        if(valToUpdate <= 0){
            console.log("invalid qty")
        } else if(valToUpdate > checkedOutQty){
            console.log("checked in more than checkedOut")
            setCheckedOutQty(0);
        } else{
            console.log("successfully checked in" + valToUpdate);
            setCheckedOutQty(checkedOutQty-valToUpdate);
        }
    }
    const handleCheckOut = (props) => {
        props.preventDefault();
        if(valToUpdate <= 0){
            console.log("invalid qty")
        } else{
            console.log("successfully checked out" + valToUpdate);
            setCheckedOutQty(checkedOutQty+valToUpdate);
        }
    }

    return (
        <form className="project-set">
            <label className="project-set-ind">{set.name}: {checkedOutQty} </label>
            <input 
                type="number" 
                id="valToUpdate"
                value={valToUpdate}
                onChange={(e) => setValToUpdate(parseInt(e.target.value))}
                required
                className="project-set-ind"
            />
                <Button className="project-set-ind" style={{marginLeft:10}} variant="contained" size="small" onClick={handleCheckIn}>Check In</Button>
                <Button className="project-set-ind" style={{marginLeft:10}} variant="contained" size="small" onClick={handleCheckOut}>Check Out</Button>
        </form>
    );
}

export default HwSet;