import React from "react";
import "./Home.scss";

import LinkBall from "./LinkBall/LinkBall";

const Home = () => {
  const stations = [
    {
      name: "LinkedIn",
      abbreviation: "LI",
      icon: "./",
      color: "#0077b5",
    },
    {
      name: "GitHub",
      abbreviation: "GH",
      icon: "./",
      color: "#6e5494",
    },
    {
      name: "Spotify",
      abbreviation: "SP",
      icon: "./",
      color: "#1DB954",
    },
    {
      name: "Resume",
      abbreviation: "RE",
      icon: "./",
      color: "#28ad9c",
    },
    {
      name: "Email",
      abbreviation: "EM",
      icon: "./",
      color: "#d119bc",
    },
  ];

  return (
    <div className="home">
      <div className="content">
        <div className="heading">
          <hr></hr>
          <div className="title">Hey, I'm Yash</div>
        </div>
        {stations.map((station) => {
          return (
            <LinkBall
              name={station.name}
              abbreviation={station.abbreviation}
              icon={station.icon}
              color={station.color}
            />
          );
        })}
      </div>
      <div className="footer"></div>
    </div>
  );
};

export default Home;
