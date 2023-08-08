import React from "react";
import Card from "./Card.js";
import "./Container.css";
// import Identity from "./Identity.js";
import FirstSection from "./FirstSection.js";

function Container(props) {
    return (
        <div className="container">
            {/* {props.text} */}
            <FirstSection />
            <div>
                <div style={{ marginBottom: "25px", }}>
                    <Card text="32hrs" />
                </div>
                <div >
                    <Card text="4hrs" />
                </div>
            </div>
            <div>
                <div style={{ marginBottom: "25px", }}>
                    <Card text="10hrs" />
                </div>
                <div >
                    <Card text="5hrs" />
                </div>
            </div>
            <div>
                <div style={{ marginBottom: "25px", }}>
                    <Card text="4hrs" />
                </div>
                <div >
                    <Card text="2hrs" />
                </div>
            </div>
        </div>
    );
}

export default Container;
