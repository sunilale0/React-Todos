import React from "react";

const forms = ({ onSubmit, inputDisplay, currInput, currVal }) => {
  return (
    <form onSubmit={onSubmit}>
      <p> To Add => {inputDisplay} </p>{" "}
      <input
        type="text"
        placeholder="I have to do this or that"
        onChange={currInput}
        value={currVal}
      />{" "}
      <button type="submit"> Add Task </button>
    </form>
  );
};

export default forms;
