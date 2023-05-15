import React from "react";
import ChangingText from "../../ChangingText";
import together from "./together.jpg"


const Emerald = () => {

    return (
        <div className="setting">
            <div className="letter">

                <p className="title">
                   Shirley,
                </p>
                <p>
                    I know you’re not the type of person to easily give up on love. 
                    I think that’s part of what makes this so challenging for me - knowing that it took consideration and still ended up this way.
                </p>    
                <p>
                    A big part of me wants to feel like a victim. 
                    It’s so tempting to believe that there’s nothing I could’ve done and this story was just our fate, but I struggle to feel that way. 
                    You have a genuinely beautiful mind and an inspiring soul; you are thoughtful, caring, and most of all loving. 
                    I wish I told you that more often and made it clear how much you meant to me.
                </p>

                <p>
                    When we first started discussing our future together I’ll admit it felt too fast. 
                    But as I grew out of the tachysensia I started believing what our lives might become. 
                    I would dream about what our kids would look like and where we would raise them. 
                    I thought about how they would learn to ride a bike as an Australian shepherd pulled them along while we ran beside them. 
                    I envisioned a world with us together in every city - New York, Toronto, Hong Kong, Singapore, and even London. 
                    I pictured our wedding day, and until recently, the plans I had for us once I was home.
                    I regret never having told you these things - I just want you to know that I truly believed in us.
                </p>

                <p>
                    Even though this chapter is closing I want you to know I care deeply about you. 
                    I will always have your best interest at heart and support you in every decision you make. 
                    I am always going to be here when you need someone to talk to or just to listen. 
                    You’re the only one I’ve ever shared this much of myself with; I truly meant it every time I said I loved you. 
                    I hope that the last time I get to tell you that is not behind us - if not in this universe, then in the next. 
                    May your heart open itself to love and to loving.
                </p>
                <img style={{
                    position: "absolute", 
                    left: "0px",
                    right: "0px",
                    width: "100%",
                    height: "250px",
                    opacity: "50%",
                    zIndex: "-1"
                }} 
                    src={together} alt="together">
                </img>
                <p>___</p>
                <p>
                    <i><b>
                    at another place in time<br/>
                    you were infinitely mine<br/>
                    relatively alright<br/>
                    <ChangingText texts={[
                        "when berenstein was",
                        "i hope we'll both be"
                    ]}/>
                    fine <br/>
                    </b>
                    </i>
                    
                </p>
                <p>___</p>
                <p>
                    You were beautiful.
                </p>
                <p>
                    Yash.
                </p>
                <p>
                    2023-05-15
                </p>

            </div>
        </div>
        

    );
};

export default Emerald;
