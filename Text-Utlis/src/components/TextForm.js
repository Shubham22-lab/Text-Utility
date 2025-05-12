import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
  };

  const handleClearClick = () => {
    setText("");
    props.showAlert("Text deleted", "warning");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      props.showAlert("Text copied to clipboard", "success");
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  const handleTrim = () => {
    let newText = text.split(/\s+/).join(" ").trim();
    setText(newText);
    props.showAlert("Removed extra spaces", "success");
  };

  const wordCount = text.trim().split(/\s+/).filter(word => word.length !== 0).length;
  const charCount = text.length;
  const readingTime = 0.008 * wordCount;

  return (
    <div style={{ color: props.Mode === "dark" ? "white" : "black" }}>
      <div className="mb-3">
        <label htmlFor="myBox" className="form-label">
          {props.heading}
        </label>
        <textarea
          className="form-control"
          id="myBox"
          rows="12"
          value={text}
          onChange={handleOnChange}
          style={{
            backgroundColor: props.Mode === "dark" ? "#13466e" : "white",
            color: props.Mode === "dark" ? "white" : "black",
          }}
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick} disabled={text.length === 0}>
        Convert to Uppercase
      </button>
      <button className="btn btn-primary mx-2 my-1" onClick={handleLoClick} disabled={text.length === 0}>
        Convert to Lowercase
      </button>
      <button className="btn btn-primary mx-2 my-1" onClick={handleTrim} disabled={text.length === 0}>
        Remove Extra Spaces
      </button>
      <button className="btn btn-primary mx-2 my-1" onClick={handleCopy} disabled={text.length === 0}>
        Copy
      </button>
      <button className="btn btn-danger mx-2" onClick={handleClearClick} disabled={text.length === 0}>
        Clear
      </button>

      <div className="container my-3">
        <h2>Your text summary</h2>
        <p>Words: {wordCount} & Characters: {charCount}</p>
        <p>{readingTime.toFixed(2)} minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something to preview it here"}</p>
      </div>
    </div>
  );
}
