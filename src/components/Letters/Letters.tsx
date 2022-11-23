import React from "react";
import ChangingText from "./components/ChangingText";
import "./Letters.scss";

const Letters = () => {

    // const [locked, setLocked] = useState(true)
    return (
        // locked ? <Unlock password="sapphire" onUnlock={() => {setLocked(false)}}/> :
        <div className="setting">
            <div className="letter">
                <p className="title">Dear Shirley,</p>
                <p>
                    You are
                    <ChangingText texts={["my fire.", "my one desire."]}/>
                </p>
                {/* <img className="jpn" src={jpn} alt="" /> */}
                <p>
                    You are
                    <ChangingText texts={["my fire.", "my one desire."]}/>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type 
                    specimen book. It has survived not only five centuries, but also the leap into 
                    electronic typesetting, remaining essentially unchanged. It was popularised in
                     the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                     and more recently with desktop publishing software like Aldus PageMaker including 
                     versions of Lorem Ipsum.
                </p>
                <p> ___</p>
                <p>With <ChangingText texts={["love,", "lots of love,"]}/></p>
                <p>Yash.</p>
            </div>
        </div>

    );
};

export default Letters;
