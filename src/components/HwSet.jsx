import React, {useState} from "react";

const HwSet = ({set}) => {
    const [checkedOutQty, setCheckedOutQty] = useState(0);
    const [valToUpdate, setValToUpdate] = useState(0);

    const handleCheckIn = (e) => {
        e.preventDefault();
        if(valToUpdate <= 0){
            console.log("invalid qty")
        } else if(valToUpdate > checkedOutQty){
            console.log("checked in more than checkedOut")
            setCheckedOutQty(0);
        } else{
            console.log("successfully checked in" + valToUpdate);
            const newQty = checkedOutQty-valToUpdate;
            setCheckedOutQty(checkedOutQty-valToUpdate);
        }
    }
    const handleCheckOut = (e) => {
        e.preventDefault();
        if(valToUpdate <= 0){
            console.log("invalid qty")
        } else{
            console.log("successfully checked out" + valToUpdate);
            const newQty = checkedOutQty+valToUpdate;
            console.log(newQty);
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
                <button className="project-set-ind" onClick={handleCheckIn}>Check In</button>
                <button className="project-set-ind" onClick={handleCheckOut}>Check Out</button>
        </form>
    );
}

export default HwSet;