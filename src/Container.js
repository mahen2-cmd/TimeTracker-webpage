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
                <div style={{ marginBottom: "25px" }}>
                    <Card thisWeekHours="32hrs" backgroundColor="hsl(15, 100%, 70%)" category="Work" lastWeekHours="36hrs"/>
                </div>
                <div>
                    <Card thisWeekHours="4hrs" backgroundColor="hsl(145, 58%, 55%)" category="Exercise" lastWeekHours="5hrs"/>
                </div>
            </div>
            <div>
                <div style={{ marginBottom: "25px" }}>
                    <Card thisWeekHours="10hrs" backgroundColor="hsl(195, 74%, 62%)" category="Play" lastWeekHours="8hrs"/>
                </div>
                <div>
                    <Card thisWeekHours="5hrs" backgroundColor="hsl(264, 64%, 52%)" category="Social" lastWeekHours="10hrs"/>
                </div>
            </div>
            <div>
                <div style={{ marginBottom: "25px" }}>
                    <Card thisWeekHours="4hrs" backgroundColor="hsl(348, 100%, 68%)" category="Study" lastWeekHours="7hrs"/>
                </div>
                <div>
                    <Card thisWeekHours="2hrs" backgroundColor="hsl(43, 84%, 65%)" category="Self Care" lastWeekHours="2hrs"/>
                </div>
            </div>
        </div>
    );
}

export default Container;
