import React from "react";

const PhotoCollection = (props) => {
    return (
        <>
            <div
                className="w-64 h-64 md:w-48 flex flex-col md:h-48"
                onClick={props.openImageViewer}
            >
                <div className="w-full h-full overflow-hidden  rounded-lg">
                    <img
                        src={props.image}
                        alt="menu"
                        className="w-full h-full transform transition duration-400 rounded-lg hover:scale-110"
                    />
                </div>
            </div>
        </>
    );
};

export default PhotoCollection;