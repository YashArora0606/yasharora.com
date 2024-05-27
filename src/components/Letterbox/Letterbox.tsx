import React, { useState } from "react";
import Unlock from "./components/Unlock";
import "./Letterbox.scss";
import Sapphire from "./components/Letters/Sapphire/Sapphire";
import Ruby from "./components/Letters/Ruby/Ruby";
import Emerald from "./components/Letters/Emerald/emerald";
import Lantern from "./components/Letters/Lantern/lantern";
import Jade from "./components/Letters/Jade/jade";
import Loopy from "./components/Letters/Loopy/loopy";
import Beli from "./components/Letters/Beli/beli";

const Letters = () => {
  const [code, setCode] = useState("");

  const codeToComponent: { [key: string]: any } = {
    sapphire: <Sapphire />,
    ruby: <Ruby />,
    emerald: <Emerald />,
    lantern: <Lantern />,
    jade: <Jade />,
    loopy: <Loopy />,
    beli: <Beli />,
  };

  const getLetterOrLockScreen = () => {
    if (code.toLowerCase() in codeToComponent) {
      return codeToComponent[code.toLowerCase()];
    }
    return (
      <Unlock
        onAttemptUnlock={(message: string) => {
          setCode(message);
        }}
      />
    );
  };

  return <>{getLetterOrLockScreen()}</>;
};

export default Letters;
