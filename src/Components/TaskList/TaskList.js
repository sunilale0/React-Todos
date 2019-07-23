import React from "react";

const taskList = ({ list, checkIndex, checked, deleteHit, edit }) => {
  let style = {
    listStyleType: "none"
  };

  return list.map((el, index) =>
    checkIndex[index] === true ? (
      <li key={index} style={style}>
        <input type="checkbox" value={index} onClick={checked} />{" "}
        <del> {el} </del>{" "}
        <button name="delete" onClick={deleteHit} value={index}>
          {" "}
          Delete{" "}
        </button>{" "}
      </li>
    ) : (
      <li key={index} style={style}>
        <input type="checkbox" value={index} onClick={checked} /> {el}{" "}
        <button name="delete" onClick={deleteHit} value={index}>
          {" "}
          Delete{" "}
        </button>{" "}
        <button name="edit" onClick={edit} value={index}>
          {" "}
          Edit{" "}
        </button>{" "}
      </li>
    )
  );
};

export default taskList;
