import React, { useState } from "react";
import ChangingText from "./components/ChangingText";
import Unlock from "./components/Unlock";
import "./Letters.scss";
import cats from "./cats.jpg"

const Letters = () => {

    const [locked, setLocked] = useState(true)
    return (
        locked ? <Unlock password="sapphire" onUnlock={() => {setLocked(false)}}/> :
        <div className="setting">
            <div className="letter">
                <p className="title">
                    <ChangingText texts={["To my sapphire,", "Dear Shirley,"]}/>
                </p>
                <p>
                    It's
                    <ChangingText texts={["a little late", "4 AM"]}/>
                    as I write this so apologies if my thoughts are scattered.
                    By the way, anything that is highlighted can be clicked on :)
                </p>    
                <p>
                    My friends keep asking why I've been smiling at my phone so much recently. 
                    Most of the time I don't even realize it, but over the past couple of days 
                    I haven't been able to help myself whenever I see
                    <ChangingText texts={["these two emojis", "\"☆彡\""]}/>
                    pop up on my screen.
                    I've spent 
                    <ChangingText texts={["the last few months", "what has felt like the last few years"]}/>
                    constantly working, and yesterday made me so happy.
                    I love the way you get 
                    <ChangingText texts={["flustered", "flustered at little things"]}/>
                    and 
                    <ChangingText texts={["laugh.", "laugh when you're nervous."]}/>
                    Or how you pretend it's not that cold when I can feel your hand shaking. I 
                    like how you're able to be 
                    <ChangingText texts={["vulnerable.", "vulnerable and talk about things that most people would find difficult to bring up."]}/>
                    And I love how you get
                    <ChangingText texts={["dimples", "the cutest dimples"]}/>
                    when you smile.
                    I wasn't lying when I said I could listen
                    to you for 
                    <ChangingText texts={["hours.", "hours - if anything that was an understatement.", "hours - I could probably listen to you forever."]}/>    
                </p>

                <p>
                    I also realized I never told you which cat is which, so here's a picture of
                    both of them together.
                    This is Hershey
                    <ChangingText texts={["(left)", "(the needy one)"]}/>
                    and Lindor
                    <ChangingText texts={["(right);", "(the smarter one);"]}/>
                    hopefully you'll get to meet them.
                </p>
                <img src={cats} alt="cats"></img>
                <p>___</p>
                <p>
                    <ChangingText texts={["With love,", "With lots of love,", "Can't wait to see you again."]}/>
                </p>
                <p>
                    Yash.
                </p>
                <p>
                    2022-11-23
                </p>
            </div>
        </div>

    );
};

export default Letters;
