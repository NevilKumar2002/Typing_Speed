import React from "react";
import keyboard from "../images/keyboard.svg"
const Heading =()=>{
    return(
        <div className="heading">
            <h2>Type Chat</h2>
            <img src={keyboard} alt="" className="KeyBoard-Image"/>
        </div>
    )
}
export default Heading;