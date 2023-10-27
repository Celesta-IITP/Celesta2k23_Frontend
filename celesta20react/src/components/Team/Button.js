import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const Button = ({ property1, className }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "button",
  });

  return (
    <button
      className={`button property-1-${state.property1} ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      <div className="home">HOME</div>
      {state.property1 === "variant-2" && <img className="line" alt="Line" src="line-1.svg" />}
    </button>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        property1: "variant-2",
      };

    case "mouse_leave":
      return {
        ...state,
        property1: "button",
      };
  }

  return state;
}

Button.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "button"]),
};
