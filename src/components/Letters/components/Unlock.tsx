import React, { useState } from "react";
import "./Unlock.scss";

interface UnlockProps {
    password: string;
    onUnlock: any;
}

const ChangingText = ({ password, onUnlock } : UnlockProps) => {

    const [message, setMessage] = useState('');
    const [wasWrong, setWasWrong] = useState(false)

    const handleChange = (event: any) => {
      setMessage(event.target.value);
    };

    const handleKeyDown = (event: any) => {
        if (event.key === 'Enter') {
          onSubmit()
        }
    }

    const onSubmit = () => {
        if (message === password) {
            onUnlock()
        } else {
            setWasWrong(true)
        }
        setMessage('')
    }

    return (
        <div className="unlock">
            {wasWrong ? "Enter a valid code:" : "Enter your code:"}
            <div className="input-area">

                <input 
                    className="input-bar" 
                    type="text" 
                    onChange={handleChange}
                    value={message}
                    onKeyDown={handleKeyDown}/>

                <button className="submit" onClick={onSubmit}>{">"}</button>
            </div>

        </div>
    );

};

export default ChangingText;
