import React, { useState } from "react";

export default function About(props) {
  const [myStyle, setMyStyle] = useState({
    color: "white",
    backgroundColor: "Black",
    border : "2px solid black"
  });
  return (
    <>
     
      <div className="container" style={myStyle}>
        <h1 className="my-3">About Us</h1>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                style={myStyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Introduction -- devoloper
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                The website TextUtils is devoloped by Shubham Rajesh Fegade.
                <br />
                He is an 14 year old learning to code <br />
                He is currently learning react JS
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                style={myStyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Functionality
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p>
                  You can use this website for 
                  <ul>
                    <li>Converting text to Uppercase</li>
                    <li>Converting text to Lowercase</li>
                    <li>Removing extra spaces from the text</li>
                    <li>You can copy the text to use it else where</li>
                    <li>At last you can clear the text to to manipulate any othere piece of text</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                style={myStyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
               Themes
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                the Utility is 2 Themes
                <ul>
                  <li><strong>Darkmode</strong></li>
                  <li><strong>Lightmode</strong></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      
      </div>
    </>
  );
}
