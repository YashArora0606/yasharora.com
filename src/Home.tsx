import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import './Home.scss'
import { faTwitter, faLinkedin, faGithub, faInstagram} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Home = () => {

  const GREETING_INTERVAL = 2000;
  const greetings = [
    "Hi, I'm Yash.", 
    "Bonjour, je m'appelle Yash.", 
    "Hola, soy Yash.", 
    "嗨，我 是 Yash.", 
    "こんにちは、私はヤシュです.",
    "안녕하세요, 저는 Yash입니다.",
    "Ciao, sono Yash.",
    "हाय, मैं यश हूं।.",
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
            <div className="subtitle">{"I'm a software engineering student from the University of Waterloo. Previously I've worked "}
              <a className="link" href="https://www.carbonite.com/"><b>{"@Carbonite"}</b></a>{", "} 
              <a className="link" href="https://www.ecdev.org/"><b>{"@Localintel"}</b></a>{", and "}
              <a className="link" href="https://www.hatchcoding.com/"><b>{"@Hatch"}</b></a>{"."}
            </div>
            
            <div className="icon-area">
              <a target="_blank" rel="noreferrer" href="https://www.github.com/yasharora0606">
                <FontAwesomeIcon icon={faGithub} size="2x"/>
              </a>
              <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/yasharora0606">
                <FontAwesomeIcon icon={faLinkedin} size="2x"/>
              </a>
              <a target="_blank" rel="noreferrer" href="https://www.instagram.com/yashydoodle">
                <FontAwesomeIcon icon={faInstagram} size="2x"/>
              </a>
              <a target="_blank" rel="noreferrer" href="https://www.twitter.com/yasharora0606">
                <FontAwesomeIcon icon={faTwitter} size="2x"/>
              </a>
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
