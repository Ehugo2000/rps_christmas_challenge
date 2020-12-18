import React from "react";

const PlayButtons = () => {
  return (
    <>
      <button data-cy="rock-btn">Play Rock</button>
      <button data-cy="paper-btn">Play Paper</button>
      <button data-cy="scissor-btn">Play Scissor</button>
    </>
  );
};

export default PlayButtons;
