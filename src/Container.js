import React from "react";
import Card from "./Card.js";
import "./Container.css";
import Identity from "./Identity.js";

function Container(props) {
    return (
        <div className="container">
            {/* {props.text} */}
            <Identity />
            <div>

                <Card text="4hrs"/>
                <Card text="10hrs"/>
            </div>

            <div>

                <Card text="32hrs"/>
                <Card text="4hrs"/>
            </div>

            <div>

                <Card text="5hrs"/>
                <Card text="2hrs"/>
            </div>
        </div>
    );
}

export default Container;
