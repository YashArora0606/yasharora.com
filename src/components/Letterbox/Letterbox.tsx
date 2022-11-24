import React, { useState } from "react";
import Unlock from "./components/Unlock";
import "./Letterbox.scss";
import Sapphire from "./components/Letters/Sapphire/Sapphire";
import Ruby from "./components/Letters/Ruby/Ruby";

const Letters = () => {

    const [code, setCode] = useState('')

    const codeToComponent: { [key: string]: any } = {
        "sapphire": <Sapphire/>,
        "ruby": <Ruby/>
    }

    const getLetterOrLockScreen = () => {
        if (code in codeToComponent) {
            return codeToComponent[code]
        }
        return (<Unlock onAttemptUnlock={(message: string) => {setCode(message)}}/>)
    }

    return (
        <>
            {getLetterOrLockScreen()}
        </>
    );
};

export default Letters;
