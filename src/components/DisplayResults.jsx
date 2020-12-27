import React from "react";

const DisplayResults = (props) => {
  return (
    <div data-cy="display-results" id="result-text">
      <h3 data-cy="display-user-choice">You chose {props.myChoice}</h3>
      <h3 data-cy="display-computer-choice">
        Computer chose {props.computerChoice}
      </h3>
    </div>
  );
};

export default DisplayResults;
