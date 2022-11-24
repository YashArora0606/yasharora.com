import React, { useState } from "react";
import "./ChangingText.scss";

interface ChangingTextProps {
    texts: string[];
}

const ChangingText = ({ texts } : ChangingTextProps) => {

    const [listIndex, setListIndex] = useState(0)
    const [className, setClassName] = useState("changeable")

    const incrementListIndex = () => {
        if (listIndex < texts.length - 1) {
            setListIndex(listIndex + 1)
        }
        if (listIndex === texts.length - 2) {
            setClassName("unchangeable")
        }
    }

    return (
        <> <span className={className} onClick={incrementListIndex}>{texts[listIndex]}</span> </>
    );

};

export default ChangingText;
