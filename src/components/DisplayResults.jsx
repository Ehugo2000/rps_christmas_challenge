import React from 'react'

const DisplayResults = (props) => {
  return (
    <div data-cy="display-results">
      <h2 data-cy="display-user-choice">You chose {props.myChoice}</h2>
      <h2>Computer chose Paper</h2>
    </div>
  )
}

export default DisplayResults