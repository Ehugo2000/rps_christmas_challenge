import React from "react";
import { Button, Icon } from "semantic-ui-react";

const PlayButtons = (props) => {
  return (
    <>
      <Button
        animated="vertical"
        data-cy="rock-btn"
        onClick={() => props.callBack("rock")}
      >
        <Button.Content visible>Play Rock</Button.Content>
        <Button.Content hidden>
          <Icon name="hand rock" />
        </Button.Content>
      </Button>

      <Button
        animated="vertical"
        data-cy="paper-btn"
        onClick={() => props.callBack("paper")}
      >
        <Button.Content visible>Play Paper</Button.Content>
        <Button.Content hidden>
          <Icon name="hand paper" />
        </Button.Content>
      </Button>

      <Button
        animated="vertical"
        data-cy="scissor-btn"
        onClick={() => props.callBack("scissor")}
      >
        <Button.Content visible>Play Scissor</Button.Content>
        <Button.Content hidden>
          <Icon name="hand scissors" />
        </Button.Content>
      </Button>
      {/*     
      <button data-cy="rock-btn"
      onClick={() => props.callBack("rock")}
      >Play Rock</button>
      <button data-cy="paper-btn"
       onClick={() => props.callBack("paper")}
      >Play Paper</button>
      <button data-cy="scissor-btn"
       onClick={() => props.callBack("scissor")}
       >Play Scissor</button> */}
    </>
  );
};

export default PlayButtons;
