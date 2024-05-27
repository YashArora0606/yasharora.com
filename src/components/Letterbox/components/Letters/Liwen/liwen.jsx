import React from "react";
import grandparents from "./grandparents.jpg"

const Liwen = () => {

    return  (
        <div className="setting">
            <div className="letter">

                <p className="title">
                   Liwen,
                </p>
                <p>
                    The longer I live, the more I believe that we tend to speak reality into existence. 
                    Once when you jokingly said that you would take a flight to Waterloo to visit, 
                    I rebutted that the only way to pay you back would be to take one to Taiwan.
                    We've done both now--I'm glad you're someone who keeps their promise.
                </p>
                <p>
                    I wanted to say thank you for this week of my grad-trip; 
                    I needed a few days to relax and I truly enjoyed this trip to Taiwan.
                    As much as I make fun of you, I genuinely value your opinion and like listening to your thoughts.
                    Here's a couple of lessons that you've taught me or reinforced during this trip:
                </p>
                <p>
                    1. 
                    From Courage to be Disliked: 
                    Your actions and integrity are your responsibility. 
                    Others' opinions of you are not.
                    There is no point wasting your mental effort on tasks that are not your own.
                </p>
                <p>
                    2. 
                    In the same vein as 1, you alone are responsible for your happiness. 
                    Others can make you happy, but it isn't their job. 
                    You need to find a way to be secure/happy and to love yourself.
                </p>
                <p>
                    3. 
                    Following from 2, making sacrifices for yourself is the greatest form of self-love. 
                    It is a testament to your willingness to be less happy now so that you will be more happy later. 
                    You are betting on your own future.
                </p>
                <p>
                    4. 
                    Go to therapy and be nicer to your mom.
                </p>
                <p>
                    I know these started as milk-tea and gelato conversations but little lessons like these matter to me.
                </p>
                <p>
                    Separetely, I never did get to take that photo of you and your grandparents.
                    I did, however, accidentally stumble upon a photo of you guys on your SD card.
                    It's endearing how intentional you are about spending time with them, and how much you care about the changes that come with the natural process of aging.
                    Although their memories will slowly weaken, I'm confident they will never forget how happy you make them.
                </p>
                <p>
                    Hopefully this little drawing serves as a nostalgic reminder of just how important you are to them and they are to you.
                </p>
                <img src={grandparents} style={{border: "2px solid black", width: "100%", height: "auto"}} alt="grandparents"/>             
                <p>
                    I wanted to let you know how grateful I am for our friendship.
                </p>
                <p>
                    See you soon in New York.
                </p>
                <p>
                    --
                </p>
                <p>
                    Yash.
                </p>

            </div>
        </div>
    )
};

export default Liwen;
