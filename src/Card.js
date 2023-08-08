import React from "react";

import ThreeCircles from "./ThreeCircles.js";
import Time from "./Time.js"
import "./Card.css";
import LastWeekHours from "./LastWeekHours.js";

// function MyComponent(props) {
//     const { backgroundColor } = props;

//     return (
//         <div style={{ backgroundColor }}>{/* your component content */}</div>
//     );
// }











function Card(props) {

    const { backgroundColor } = props;
    return (
        <div style={{ backgroundColor }}
            className="card">
            {/* <div style={{ marginTop: "25px" }}> */}
            <br />
            <br />
            {/* <br /> */}
            <div className="lower-section">
                <br />
                {/* <br /> */}
                <div>
                    <div
                        style={{
                            // color: "white",
                            width: "225px",
                            height: "15px",
                            // backgroundColor: "green",
                            flexDirection: "row",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            marginTop: "10px",
                        }}
                    >
                        <div style={{ color: "white", marginLeft: "30px" }}>
                            {props.category}
                        </div>

                        <ThreeCircles />
                    </div>
                </div>

                <br />
                <Time text={props.thisWeekHours} />
                <br />
                <LastWeekHours text={props.lastWeekHours} />
            </div>
            {/* </div> */}
        </div>
    );
}

export default Card;
