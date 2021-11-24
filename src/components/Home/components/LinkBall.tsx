import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./LinkBall.scss";

interface Props {
  name: string;
  abbreviation: string;
  icon: any;
  color: string;
  url: string;
}

const LinkBall = ({ name, abbreviation, icon, color, url }: Props) => {
  return (
    <div
      className="circle"
      style={{ background: color }}
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
