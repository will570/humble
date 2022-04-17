import React from "react";
import "./PopUp.css"

function PopUp(direction){
    return (direction.trigger) ? ( 
        <div className="popUp" id = "popUpMessage">
            <div className="popUp__Inner">
                {direction.children} 
            </div>

        </div>
    ): "";
}

export default PopUp;