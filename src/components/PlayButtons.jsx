import React from "react";

const PlayButtons = (props) => {
  return (
    <>
      <button data-cy="rock-btn"
      onClick={() => props.callBack("rock")}
      >Play Rock</button>
      <button data-cy="paper-btn"
       onClick={() => props.callBack("paper")}
      >Play Paper</button>
      <button data-cy="scissor-btn"
       onClick={() => props.callBack("scissor")}
       >Play Scissor</button>
    </>
  );
};

export default PlayButtons;
