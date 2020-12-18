import React from 'react'

const DisplayResults = (props) => {
  return (
    <div data-cy="display-results">
      <h2 data-cy="display-user-choice">You chose {props.myChoice}</h2>
      <h2 data-cy="display-computer-choice">Computer chose {props.computerChoice}</h2>
    </div>
  )
}

export default DisplayResults