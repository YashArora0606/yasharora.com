import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./LinkBall.scss";
import { CSSTransition } from "react-transition-group"

interface Props {
  name: string;
  abbreviation: string;
  icon: any;
  color: string;
  url: string;
}

const duration = 200;

const LinkBall = ({ name, abbreviation, icon, color, url }: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="circle"
      style={{ background: color }}
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
      onClick={()=> window.open(url, "_blank")}
    >
        <FontAwesomeIcon 
          className="faicon"
          size="lg"
          icon={icon}
        /> 
    </div>
  );
};

export default LinkBall;
