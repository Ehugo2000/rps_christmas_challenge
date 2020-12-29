import React, { useState } from "react";
import Header from "./components/Header";
import PlayButtons from "./components/PlayButtons";
import DisplayResults from "./components/DisplayResults";
import { Grid } from "semantic-ui-react";

export const App = () => {
  const [userChoice, setUserChoice] = useState();
  const [computerChoice, setComputerChoice] = useState();
  const [result, setResult] = useState();

  const callBack = (selectedWeapon) => {
    setUserChoice(selectedWeapon);
    const computerChoice = getComputerChoice();
    setComputerChoice(computerChoice);
    setResult(getResult(selectedWeapon, computerChoice));
  };

  const getResult = (selectedWeapon, computerWeapon) => {
    if (selectedWeapon === computerWeapon) {
      return "draw";
    }
    if (
      (selectedWeapon === "rock" && computerWeapon === "scissor") ||
      (selectedWeapon === "paper" && computerWeapon === "rock") ||
      (selectedWeapon === "scissor" && computerWeapon === "paper")
    ) {
      return "win";
    }
    if (
      (selectedWeapon === "rock" && computerWeapon === "paper") ||
      (selectedWeapon === "paper" && computerWeapon === "scissor") ||
      (selectedWeapon === "scissor" && computerWeapon === "rock")
    ) {
      return "lose";
    }
  };

  const getComputerChoice = () => {
    const random = Math.random();
    if (random < 0.34) {
      return "rock";
    } else if (random <= 0.66) {
      return "paper";
    } else {
      return "scissor";
    }
  };

  return (
    <>
      <Grid id="container-grid">
        <Grid.Row>
          <Grid.Column width={16}>
            <Header />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={16}>
            <PlayButtons onSelectWeapon={callBack} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={16}>
            <DisplayResults
              myChoice={userChoice}
              computerChoice={computerChoice}
              result={result}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
};

export default App;
