import React from "react";
import "../button.css";

const Button = () => {
  return (
    <>
      <input type="checkbox" id="c" />
      <label htmlFor="c" id="upload_app">
        <div id="app">
          <div id="arrow"></div>
          <div id="success">
            <i className="fas fa-check-circle"></i>
          </div>
        </div>
      </label>
    </>
  );
};

export default Button;
