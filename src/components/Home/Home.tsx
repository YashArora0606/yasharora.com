import React from "react";
import "./Home.scss";
import { faGithub, faLinkedin, faSpotify } from "@fortawesome/free-brands-svg-icons";
import LinkBall from "./LinkBall/LinkBall";
import { faEnvelopeSquare, faFileAlt } from "@fortawesome/fontawesome-free-solid";

const Home = () => {
  const stations = [
    {
      name: "LinkedIn",
      abbreviation: "LI",
      icon: faLinkedin,
      color: "#0077b5",
      url: "https://www.linkedin.com/in/yasharora0606"
    },
    {
      name: "GitHub",
      abbreviation: "GH",
      icon: faGithub,
      color: "#6e5494",
      url: "https://www.github.com/yasharora0606"
    },
    {
      name: "Spotify",
      abbreviation: "SP",
      icon: faSpotify,
      color: "#1DB954",
      url: "https://open.spotify.com/user/yasharora6"
    },
    {
      name: "Resume",
      abbreviation: "RE",
      icon: faFileAlt,
      color: "#28ad9c",
      url: "https://yasharora.com/resume"
    },
    {
      name: "Email",
      abbreviation: "EM",
      icon: faEnvelopeSquare,
      color: "#d119bc",
      url: "mailto:yasharora0606@gmail.com"
    },
  ];

  return (
    <div className="home">
      <div className="content">
        <div className="heading">
          <hr className="line"></hr>
          <div className="title">Hey, I'm Yash</div>
          <p className="subtitle">
            {"SWE intern "}
            <a className="link shopify" href="https://www.shopify.com/" target="_blank" rel="noreferrer"><b>{"@Shopify"}</b></a>
            {", incoming SWE intern "}
            <a className="link tesla" href="https://www.tesla.com/" target="_blank" rel="noreferrer"><b>{"@Tesla"}</b></a>
            {", Software Engineering "}
            <a className="link uwaterloo" href="https://uwaterloo.ca/future-students/programs/software-engineering" target="_blank" rel="noreferrer"><b>{" @UWaterloo"}</b></a>
          </p>
        </div>
        <div className="stations">
          {stations.map((station) => {
            return (
              <LinkBall
                name={station.name}
                abbreviation={station.abbreviation}
                icon={station.icon}
                color={station.color}
                url={station.url}
              />
            );
          })}
        </div>
      </div>
      <div className="footer"></div>
    </div>
  );
};

export default Home;
