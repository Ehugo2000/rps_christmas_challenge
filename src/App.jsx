import React, { useState } from "react";
import Header from "./components/Header";
import PlayButtons from "./components/PlayButtons";
import DisplayResults from "./components/DisplayResults";

export const App = () => {
  const [userChoice, setUserChoice] = useState();
  const [computerChoice, setComputerChoice] = useState();

  const callBack = (buttonUserChoice) => {
    setUserChoice(buttonUserChoice);
    setComputerChoice(getComputerChoice());
  };

  const getComputerChoice = () => {
    const random = Math.random();
    if (random < 0.35) {
      return "rock";
    } else if (random <= 0.65) {
      return "paper";
    } else {
      return "scissor";
    }
  };

  return (
    <>
      <Header />
      <PlayButtons callBack={callBack} />
      <DisplayResults myChoice={userChoice} computerChoice={computerChoice} />
    </>
  );
};

export default App;
