import React from "react";
import lantern from "./lantern.jpg"


const Lantern = () => {

    return (
        <div className="setting">
            <div className="letter">

                <p className="title">
                   Shirley,
                </p>
                <p>
                    I struggle to act as though you are nothing to me when you were so recently everything.
                    Paradoxically, I want to know that it hurt for you as much as it did for me, yet I never want you to feel the pain I felt.
                    And at the end of the day I pray that our lives, be them separate, continue to bring us love.
                    A piece of my heart will forever ache at the thought of you.
                    I still wonder how you feel and hope that a piece of your heart aches too.
                </p>    
                <p>
                    Maybe this feeling will fade with time, though it's sickening that you can't speed up the process.
                    Hopefully after anough teary eyed nights we will think of each other and smile.
                    We will focus on the memories we made, the time we shared, and the love we gave.
                    You taught me that nothing in this life is a guarantee.
                </p>
                <p>
                    If I had known that night would be the last time I'd see you, I would have held you tighter.
                    I would have kissed you longer.
                    I would have called you baby or darling or something cringier one more time.
                    I would have said one more "I love you" and "goodbye."
                    I would have told you how proud I am of you, how beautiful of a soul you have, and how grateful I will forever be to have had you in my life.
                    But while those opportunities are gone, as are you, the least I can do is tell you how I feel.
                </p>
                <img src={lantern} style={{width: "400px", height: "500px"}} alt="lantern"/>             
                <p>___</p>
                <p>
                    As I let this water lantern meander downstream, I am reminded that our river never stops flowing.
                </p>
                <p>
                    Yash.
                </p>
                <p>
                    2023-07-08
                </p>

            </div>
        </div>
        

    );
};

export default Lantern;
