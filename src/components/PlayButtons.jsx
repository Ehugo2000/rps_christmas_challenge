import React from "react";
import { Button, Icon } from "semantic-ui-react";

const PlayButtons = (props) => {
  return (
    <>
      <Button
        color="pink"
        animated="vertical"
        data-cy="rock-btn"
        onClick={() => props.onSelectWeapon("rock")}
      >
        <Button.Content visible>Play Rock</Button.Content>
        <Button.Content hidden>
          <Icon name="hand rock" />
        </Button.Content>
      </Button>

      <Button
        color="blue"
        animated="vertical"
        data-cy="paper-btn"
        onClick={() => props.onSelectWeapon("paper")}
      >
        <Button.Content visible>Play Paper</Button.Content>
        <Button.Content hidden>
          <Icon name="hand paper" />
        </Button.Content>
      </Button>

      <Button
        color="purple"
        animated="vertical"
        data-cy="scissor-btn"
        onClick={() => props.onSelectWeapon("scissor")}
      >
        <Button.Content visible>Play Scissor</Button.Content>
        <Button.Content hidden>
          <Icon name="hand scissors" />
        </Button.Content>
      </Button>
    </>
  );
};

export default PlayButtons;
