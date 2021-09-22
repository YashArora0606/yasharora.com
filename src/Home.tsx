import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import './Home.scss'
import { faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Home = () => {

  const GREETING_INTERVAL = 2000;
  const greetings = [
    "Hi, I'm Yash!", 
    "Bonjour, je m'appelle Yash!", 
    "Hola, soy Yash!", 
    "你好，我的名字是 Yash!", 
    "こんにちは、私はヤシュです!",
    "안녕하세요, 저는 Yash입니다!",
    "Ciao, sono Yash!",
    "हाय, मैं यश हूं।!",
    "привет я Яш!"
  ]

  const [greetingCounter, setGreetingCounter] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setGreetingCounter(counter => (counter + 1) % greetings.length);
    }, GREETING_INTERVAL);
    return () => clearInterval(interval);
  }, [greetings.length]);

  return (
      <div className="home">
        <div className="content">
          <div className="text-area">
            <img className="headshot" src="/headshot.jpg" alt="headshot" />
            <div className="title">{greetings[greetingCounter]}<i className="fab fa-github"></i></div>
            <p className="subtitle">{"I'm a software engineering student from the University of Waterloo, currently working on the Oxygen BETA "}
              <a className="link shopify" href="https://www.shopify.com/"><b>{"@Shopify"}</b></a>{". In a few months I'll be joining an amazing team working on energy projects "}
              <a className="link tesla" href="https://www.tesla.com/"><b>{"@Tesla"}</b></a>{"!"}
            </p>
            <p className="subtitle">
              {"Previously, I interned "}
              <a className="link carbonite" href="https://www.carbonite.com/"><b>{"@Carbonite"}</b></a>{", "} 
              <a className="link localintel" href="https://www.ecdev.org/"><b>{"@Localintel"}</b></a>{", and "}
              <a className="link hatch" href="https://www.hatchcoding.com/"><b>{"@Hatch"}</b></a>{"."}
            </p>
            
            <div className="icon-area">
              <a target="_blank" rel="noreferrer" href="https://www.github.com/yasharora0606">
                <FontAwesomeIcon icon={faGithub} size="2x"/>
              </a>
              <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/yasharora0606">
                <FontAwesomeIcon icon={faLinkedin} size="2x"/>
              </a>
              {/* <a target="_blank" rel="noreferrer" href="https://www.instagram.com/yarora_">
                <FontAwesomeIcon icon={faInstagram} size="2x"/>
              </a>
              <a target="_blank" rel="noreferrer" href="https://www.twitter.com/yasharora0606">
                <FontAwesomeIcon icon={faTwitter} size="2x"/>
              </a> */}
              <a target="_blank" rel="noreferrer" href="mailto:yasharora0606@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} size="2x"/>
              </a>
            </div>
            <a target="_blank" rel="noreferrer" href="YashArora_Resume.pdf">
              <button className="resume-button">
                Résumé
              </button>
            </a>

          </div>
        </div>
        <div className="footer"></div>
      </div>

  );
}

export default Home;
