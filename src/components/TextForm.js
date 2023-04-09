// here, {useState} is a hook
import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  // after we update "text", the updated value is stored in setText

  // text = "sdhfbshd";  //wrong way to change state
  // setText("bvhffs");  //correct way to change state

  const handleUppercaseClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!", "success")
  };

  const handleLowercaseClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!", "success")
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared!", "success")
  };

  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };

  return (
    <>
      <div
        className="container"
        style={{color: props.mode === "dark" ? "white" : "black"}}
      >
        <div className="mb-3">
          <label htmlFor="myBox" className="form-label">
            <h2>{props.heading}</h2>
          </label>

          <textarea
            className="form-control"
            style={{
              backgroundColor: props.mode === "dark" ? "#323232" : "white",
              color: props.mode === "dark" ? "white" : "black"
            }}
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>

        <button className="btn btn-primary mx-1" onClick={handleUppercaseClick}>
          Convert to Uppercase
        </button>

        <button className="btn btn-primary mx-1" onClick={handleLowercaseClick}>
          Convert to Lowercase
        </button>

        <button className="btn btn-primary mx-1" onClick={handleClearClick}>
          Clear Text
        </button>
      </div>

      <div
        className="container my-5"
        style={{color: props.mode === "dark" ? "white" : "black"}}
      >
        <h2>Text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes read</p>

        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
