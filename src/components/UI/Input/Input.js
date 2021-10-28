import React from 'react';

const Input = (props) => {
  return (
    <div className={props.className}>
      <label htmlFor={props.inputType}>{props.inputType}</label>
      <input
        type={props.inputType}
        id={props.inputType}
        value={props.Value}
        onChange={props.OnChange}
        onBlur={props.OnBlur}
      />
    </div>
  );
};
export default Input;
