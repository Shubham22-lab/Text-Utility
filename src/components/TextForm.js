import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpclick = () => {
    console.log("uppercase was clicked");
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted to Uppercase" , "success")
  };
  const handleOnChange = (event) => {
    console.log("fdf");
    setText(event.target.value);
  };
  const handleLoclick = () => {
    console.log("uppercase was clicked");
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted to Lowercase" , "success")
  };
  const handleClearclick = () => {
    setText("");
    props.showAlert("Text deleted" , "warning")
  };
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      props.showAlert("Text Copied to clipboard" , "success")
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };
  const handleTrim = () =>{
    let newText = text.split(/[ ]+/)
    setText(newText.join(" "));
    props.showAlert("Removed Extra Spaces" , "success")
  }

  const [text, setText] = useState("");
  return (
    <div style={{ color: props.Mode === "dark" ? "white" : "dark" }}>
      <div className="mb-3">
        <label htmlFor="MyBox" className="form-label">
          {props.heading}
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="12"
          value={text}
          onChange={handleOnChange}
          style={{
            backgroundColor: props.Mode === "dark" ? "grey" : "white",
            color: props.Mode === "dark" ? "white" : "black",
          }}
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpclick}>
        Convert to Uppercase
      </button>
      <button className="btn btn-primary mx-2" onClick={handleLoclick}>
        Convert to Lowercase
      </button>
      <button className="btn btn-primary mx-2" onClick={handleTrim}>
        Remove extra spaces
      </button>
      <button className="btn btn-primary mx-2" onClick={handleCopy}>
        Copy
      </button>
      <button className="btn btn-danger mx-2" onClick={handleClearclick}>
        Clear
      </button>
      <div className="container my-3" >
        <h2>Your text summery</h2>
        <p>
          Words : {text.split(" ").length} &amp; Charecters : {text.length}
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}
