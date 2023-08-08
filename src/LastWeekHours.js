import React from "react";

import "./LastWeekHours.css";

function LastWeekHours(props) {
    return (
    <div className="lastWeekHours">

        Last Week - {props.text}
    </div>);
}

export default LastWeekHours;
