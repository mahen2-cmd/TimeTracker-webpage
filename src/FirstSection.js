import React from "react";
import "./FirstSection.css";
import Identity from "./Identity.js";

function FirstSection(props) {
    return (
        <div className="firstSection">
            <Identity />
            <div className="text-container">
                <div style={{ marginBottom: "15px", fontSize: "15px", color: "hsl(235, 45%, 61%)"  }} >Daily</div>
                <div style={{ marginBottom: "15px", fontSize: "15px", color: "white"  }} >Weekly</div>
                <div style={{ marginBottom: "15px", fontSize: "15px", color: "hsl(235, 45%, 61%)"  }} >Monthly</div>
            </div>
        </div>
    );
}

export default FirstSection;
