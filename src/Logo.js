import React, { useState, useEffect } from "react";

function Logo(props) {
    const [imagePath, setImagePath] = useState(null);

    useEffect(() => {
        const importImage = async () => {
            const image = await import(`./svgtopng/${props.logoName}.png`);
            setImagePath(image.default);
        };

        importImage();
    }, [props.logoName]);

    if (!imagePath) {
        return <div>Loading...</div>;
    }

    return (
        <div style={{ }}>
            <img src={imagePath} alt="Logo" width="20px" height="20px" />
        </div>
    );
}

export default Logo;
