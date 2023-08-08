import React from "react";

import "./Identity.css";
import idImage from "./images/image-jeremy.png";

function Identity(props) {
    return (
        <div className="identity">
            <div
                // style={{
                //     margin: "20px",
                // }}
            >
                <div style={{ width: "100px", height: "110px" }}>
                    <img
                        src={idImage}
                        alt="ID"
                        width="70px"
                        height="70px"
                        style={{
                            border: "2px solid white",
                            borderRadius: "50%",
                            width: "70px",
                            height: "70px",
                            marginLeft: "20px",
                            marginTop: "20px",
                        }}
                    />
                </div>

                <div
                    style={{
                        color: "hsl(236, 100%, 87%)",
                        fontSize: "12px",
                        marginBottom: "3px",
                        marginLeft: "20px",
                        marginTop: "20px",
                    }}
                >
                    Report for
                </div>
                <div
                    style={{
                        color: "white",
                        fontSize: "35px",
                        fontWeight: "300",
                        marginLeft: "20px",
                    }}
                >
                    Jeremy Robson
                </div>
            </div>
        </div>
    );
}

export default Identity;
