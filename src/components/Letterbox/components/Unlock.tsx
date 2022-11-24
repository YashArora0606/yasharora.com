import React, { useState } from "react";
import "./Unlock.scss";

interface UnlockProps {
    onAttemptUnlock: any;
}

const ChangingText = ({ onAttemptUnlock } : UnlockProps) => {

    const [message, setMessage] = useState('');

    const handleChange = (event: any) => {
      setMessage(event.target.value);
    };

    const handleKeyDown = (event: any) => {
        if (event.key === 'Enter') {
          onSubmit()
        }
    }

    const onSubmit = () => {
        onAttemptUnlock(message)
        setMessage('')
    }

    return (
        <div className="unlock">
            {"Enter your code:"}
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
