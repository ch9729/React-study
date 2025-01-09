import React from "react";

const Button = ({ upDateButton }) => {
  return (
    <div>
      <button
        onClick={() => {
          upDateButton(-100);
        }}
      >
        -100
      </button>
      <button
        onClick={() => {
          upDateButton(-10);
        }}
      >
        -10
      </button>
      <button
        onClick={() => {
          upDateButton(-1);
        }}
      >
        -1
      </button>
      <button
        onClick={() => {
          upDateButton(1);
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          upDateButton(10);
        }}
      >
        +10
      </button>
      <button
        onClick={() => {
          upDateButton(100);
        }}
      >
        +100
      </button>
    </div>
  );
};

export default Button;
