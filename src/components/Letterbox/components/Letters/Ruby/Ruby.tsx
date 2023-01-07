import React from "react";
import { Redirect } from "react-router-dom";

const Ruby = () => {
    return (
        // <div className="setting">
        //     <div className="letter">
        //         <p>
        //             testing
        //             <ChangingText texts={["one", "two"]}/>
        //         </p>    
        //     </div>
        // </div>
        <Redirect to="/ruby" />
    );
};

export default Ruby;
