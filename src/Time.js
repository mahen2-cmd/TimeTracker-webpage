import React from "react";

import "./Time.css";

function Time(props){

    return(

        <div className="time">
            {props.text}
        </div>
    );

}

export default Time;