import React, { useState } from "react";
import "./Unlock.scss";

interface UnlockProps {
    password: string;
    onUnlock: any;
}

const ChangingText = ({ password, onUnlock } : UnlockProps) => {

    return (
        <div>
            Enter your code:
            <input type="text"/>
        </div>
    );

};

export default ChangingText;
