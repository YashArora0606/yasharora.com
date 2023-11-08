import React, { useEffect, useState } from "react";
import cat from "./cat.JPG"


const Jade = () => {

    const [time, setTime] = useState(new Date());
    var bdayTime = new Date("Wed Nov 08 2023 00:00:00 GMT+0800")

    useEffect(() => {
        setInterval(() => setTime(
            new Date()
        ), 1000);
    }, []);

    var letter =  (
        <div className="setting">
            <div className="letter">

                <p className="title">
                   Shirley,
                </p>
                <p>
                    I hope this finds you in high spirits and good health. 
                    Today marks the end of your 22nd year on this beautiful planet, and I wanted to take a moment to wish you a heartfelt happy birthday.
                </p>
                <p>
                    This past year was a cherished part of my life, and even though we've grown apart the memories we created will forever hold a special place in my heart.
                    It's with a sense of nostalgia and gratitude that I let myself write to you.
                </p>
                <p>
                    May your day be filled with joy and surrounded by the love of those around you.
                    Today marks a special point in an exciting chapter of your life, and I want you know that you are always remembered with fondness and warmth.
                    I hope school hasn't been to stressful, that you've made many friends, and that you are truly fulfilled on your academic path.
                    Life has been quite kind to me these past couple months, and I pray you've been able to say the same for yourself.
                    Wishing you a day that brings you happiness, a future that holds great opportunities and adventures, and both joy and fullfillment which endlessly fail to recede.
                    I'm incredibly proud of how far you've come, and hopeful that you continue to grow in ways beyond the imaginable.
                </p>
                <p>
                    Once more, a very happy birthday, my old friend.
                </p>
                <p>
                    生日快乐, 熊枫琳
                </p>
                <p>___</p>
                <p>
                    Be well,
                </p>
                <p>
                    Yash.
                </p>
                <p>
                    2023-11-08
                </p>
                <p>___</p>
                <p>
                    P.S.
                </p>
                <p>
                    I'll likely be in Shanghai some time in the next month or two - let me know if you'd like to catch up; 
                    I do have a small gift for you and am excited to know how life has been.
                    Otherwise, let me know your address and I'm happy to send it over.
                </p>

            </div>
        </div>
    )

    var timerLock = (
        <div className="setting">
            <div className="letter">
                <p>
                    Hey, its not your birthday yet chill out
                </p>
                <p>
                    This will unlock in {Math.floor((bdayTime - time) / (1000 * 60 * 60))} hours and {Math.ceil(((bdayTime - time) / (1000 * 60 * 60) - (Math.floor((bdayTime - time) / (1000 * 60 * 60)))) * 60)} minutes
                </p>
                <p>
                    Here's a cat I found in malaysia while you wait
                </p>       
                <img src={cat} style={{width: "400px", height: "400px"}} alt="cat"/>      
            </div>
        </div>
    )

    return (
        time > bdayTime ? letter : timerLock
    );
};

export default Jade;
