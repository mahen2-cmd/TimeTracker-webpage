import React from "react";

import Time from "./Time.js"
import "./Card.css";

function Card(props) {
    return (
        <div className="card">
            {/* <div style={{ marginTop: "25px" }}> */}
            <br />
            <br />
            {/* <br /> */}

            <div className="lower-section">
                    <br />
                <div>
                    <div className="three-circles">
                        <div
                            className="small-circle"
                            style={{
                                marginRight: "3px",
                            }}
                        ></div>
                        <div
                            className="small-circle"
                            style={{
                                marginRight: "3px",
                            }}
                        ></div>
                        <div
                            className="small-circle"
                        ></div>
                    </div>
                </div>

                <Time text={props.text} />
            </div>
            {/* </div> */}
        </div>
    );
}

export default Card;
