import React from "react";
import "./FirstSection.css";
import Identity from "./Identity.js";

function FirstSection(props) {
    return (
        <div className="firstSection">
            <Identity />
            <div className="text-container">
                <div className="viewType">Daily</div>
                <div className="viewType">Weekly</div>
                <div className="viewType">Monthly</div>
            </div>
        </div>
    );
}

export default FirstSection;
