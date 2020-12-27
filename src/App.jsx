import React, { useState } from "react";
import Header from "./components/Header";
import PlayButtons from "./components/PlayButtons";
import DisplayResults from "./components/DisplayResults";
import { Container, Grid } from "semantic-ui-react";

export const App = () => {
  const [userChoice, setUserChoice] = useState();
  const [computerChoice, setComputerChoice] = useState();

  const callBack = (buttonUserChoice) => {
    setUserChoice(buttonUserChoice);
    setComputerChoice(getComputerChoice());
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
            <PlayButtons callBack={callBack} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={16}>
            <DisplayResults
              myChoice={userChoice}
              computerChoice={computerChoice}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
};

export default App;
