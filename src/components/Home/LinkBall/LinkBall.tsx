import React, { useState } from "react";
import "./LinkBall.scss";

interface Props {
  name: string;
  abbreviation: string;
  icon: string;
  color: string;
}

const LinkBall = ({ name, abbreviation, icon, color }: Props) => {
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
    >
      {isHovered ? name : abbreviation}
    </div>
  );
};

export default LinkBall;
