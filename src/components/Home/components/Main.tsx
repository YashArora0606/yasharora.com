import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import useLocalStorage from "use-local-storage";
import "./Main.scss";
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'


const Main = () => {

    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

    const switchTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    }

    return (
        <div className="main" data-theme={theme}>

            
            <div className="mid-section">

                <div className="header">
                    <button className="switcher" onClick={switchTheme}>
                        {theme === 'light' ? <FontAwesomeIcon size={'2x'} icon={faMoon} className="icon"/> : <FontAwesomeIcon size={'2x'} icon={faSun} className="icon"/>}
                    </button>
                    {/* <button className="home-button">Home</button> */}
                </div>
                <div className="section">
                    <div className="section-title">
                        <p>Intro</p>
                    </div>
                    <div className="section-text">
                        <p>
                            {"Hi, I'm Yash."}
                        </p>
                        <p>
                            {"I'm an incoming quantitative trader at "}
                            <a className="styled-link jane-street hoverable" href="https://janestreet.com" target="_blank" rel="noreferrer">{"Jane Street"}</a>
                            {" and a software engineering student at the University of "}
                            <a className="styled-link waterloo hoverable" href="https://uwaterloo.ca" target="_blank" rel="noreferrer">{"Waterloo"}</a>
                            {". I've also worked at "}
                            {/* <a className="styled-link jane-street hoverable" href="https://janestreet.com" target="_blank" rel="noreferrer">{"Jane Street"}</a>
                            {", "} */}
                            <a className="styled-link citsec hoverable" href="https://citadelsecurities.com" target="_blank" rel="noreferrer">{"Citadel Securities"}</a>
                            {", "}
                            <a className="styled-link bloomberg hoverable" href="https://bloomberg.com" target="_blank" rel="noreferrer">{"Bloomberg"}</a>
                            {", and "}
                            <a className="styled-link shopify hoverable" href="https://shopify.com" target="_blank" rel="noreferrer">{"Shopify"}</a>
                            {"."}
                        </p>
                        {/* <p>
                            {"Talk to me about quantitative finance, Mario Kart, and "}
                            <a className="styled-link cats hoverable" href="/cats" target="_blank" rel="noreferrer">{"my cats"}</a>
                            {"."}
                        </p> */}
                    </div>
                </div>
                <div className="section">
                    <div className="section-title">
                        <p>Email</p>
                    </div>
                    <div className="section-text">
                        <p>
                            <div className="links-section">
                                <p>{"yasharora0606[at]gmail.com"}</p>
                                <p>{"yash.arora[at]uwaterloo.ca"}</p>
                            </div>
                        </p>
                    </div>
                </div>
                {/* <div className="section">
                    <div className="section-title">
                        <p>Links</p>
                    </div>
                    <div className="section-text">
                        <p>
                            <div className="links-section">
                                <a className="link" href="https://vsco.co/yarora" target="_blank" rel="noreferrer">VSCO</a>{`   `}
                                <a className="link" href="/linkedin" target="_blank" rel="noreferrer">LinkedIn</a>{`   `}
                                <a className="link" href="/github" target="_blank" rel="noreferrer">GitHub</a>{`   `}
                                <a className="link" href="/resume" target="_blank" rel="noreferrer">Resume</a>{`   `}
                                <a className="link" href="mailto:yasharora0606@gmail.com" target="_blank" rel="noreferrer">Email</a>
                            </div>
                        </p>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default Main;
