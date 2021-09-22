import React from 'react';

const CursorPointer = `cursor: pointer`;

const RadioInput = styled.input`
  ${CursorPointer}  
`;

export function Choices({openFood, choiceRadio}) {
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
          />
          <label for={choice}>{choice}</label>{" "}
        </>
      ))}
    </>
  )
}