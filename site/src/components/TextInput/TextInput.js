import React from "react";

const TextInput = props => {
  return (
    <div className="text-input">
      <input name={props.name} type="text" required {...props} />
      <label htmlFor={props.name} className="floating">
        <span className="content-name">{props.name}</span>
      </label>
    </div>
  );
};

export default TextInput;
