import React from "react";
import "./Player.scss";
import albumart from "./albumart.png";
import {
  faGithub,
  faLinkedin,
  faSpotify,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelopeSquare,
  faFileAlt,
} from "@fortawesome/fontawesome-free-solid";
import LinkBall from "./LinkBall";

const links = [
  {
    name: "LinkedIn",
    abbreviation: "LI",
    icon: faLinkedin,
    color: "#0077b5",
    url: "https://www.linkedin.com/in/yasharora0606",
  },
  {
    name: "GitHub",
    abbreviation: "GH",
    icon: faGithub,
    color: "#6e5494",
    url: "https://www.github.com/yasharora0606",
  },
  {
    name: "Spotify",
    abbreviation: "SP",
    icon: faSpotify,
    color: "#1DB954",
    url: "https://open.spotify.com/user/yasharora6",
  },
  {
    name: "Resume",
    abbreviation: "RE",
    icon: faFileAlt,
    color: "#28ad9c",
    url: "https://yasharora.com/resume",
  },
  {
    name: "Email",
    abbreviation: "EM",
    icon: faEnvelopeSquare,
    color: "#d119bc",
    url: "mailto:yasharora0606@gmail.com",
  },
];

const Player = () => {
  return (
    <div className="screen">
      <div className="UIArea">
        {/* <div className="topBar">
                    <button>Down Arrow</button>
                    <div>under her influence.</div>
                    <button>...</button>
                </div> */}
        <div className="albumArtArea">
          <img className="albumArt" src={albumart} alt="Album cover" />
        </div>
        {/* <div className="songNameArea">
                    <div>
                        Hey, I'm Yash
                    </div>
                    <div className="likeButton">
                        <button>
                            like
                        </button>
                    </div>
                </div>
                <div>
                    Yash Aroragggg
                </div>
                <div className="slider">
                    <hr />
                </div>
                <div className="sliderTimerArea">
                    <div>
                        time1
                    </div>
                    <div>
                        time2
                    </div>
                </div>
                <div className="controls">
                    <button>Shuffle</button>
                    <button>Previous</button>
                    <button>Play</button>
                    <button>Next</button>
                    <button>Repeat</button>
                </div> */}

        <div className="rightOfImage">
          <div className="introArea">
            <div className="title">Hey, I'm Yash!</div>
            <p className="subtitle">
              {"I'm a SWE intern "}
              <a
                className="link shopify"
                href="https://www.shopify.com/"
                target="_blank"
                rel="noreferrer"
              >
                <b>{"@Shopify"}</b>
              </a>
              {", incoming SWE intern "}
              <a
                className="link tesla"
                href="https://www.tesla.com/"
                target="_blank"
                rel="noreferrer"
              >
                <b>{"@Tesla"}</b>
              </a>
              {", and a Software Engineering student "}
              <a
                className="link uwaterloo"
                href="https://uwaterloo.ca/future-students/programs/software-engineering"
                target="_blank"
                rel="noreferrer"
              >
                <b>{" @UWaterloo"}</b>
              </a>

            </p>
            <p>
              <b>{"I am NOT the person in the news facing charges! I just happen to have the same name."}</b>   
            </p>
            {links.map((link) => {
              return (
                <LinkBall
                  name={link.name}
                  abbreviation={link.abbreviation}
                  icon={link.icon}
                  color={link.color}
                  url={link.url}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
