import React from 'react';

export function Choices({}) {
  return (
    <>
      <h3>Choose one</h3>
      {openFood.choices.map(choice => (
        <>
          <input
            type="radio"
            id={choice}
            name="choice"
            value={choice}
            checked={choiceRadio.value === choice}
            onChange={choiceRadio.onChange}
      ))}
    </>
  )
}