import React from "react";
import ChangingText from "../../ChangingText";

const Ruby = () => {
    return (
        <div className="setting">
            <div className="letter">
                <p>
                    testing
                    <ChangingText texts={["one", "two"]}/>
                </p>    
            </div>
        </div>
    );
};

export default Ruby;
