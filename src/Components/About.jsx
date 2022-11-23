import React from "react";
// import { useState } from "react";

export default function About(props) {
  // const [myStyle, setmyStyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  // });
  // const [btntext, setBtnText] = useState("Dark Mode");
  // const toggleStyle = () => {
  //   if (myStyle.color === "black") {
  //     setmyStyle({
  //       color: "white",
  //       backgroundColor: "black",
  //     });
  //     setBtnText("Light Mode");
  //   } else {
  //     setmyStyle({
  //       color: "black",
  //       backgroundColor: "white",
  //     });
  //     setBtnText("Dark Mode");
  //   }
  // };

  return (
    <div
      className="container"
      /*style={myStyle}*/ style={{
        color: props.mode === "dark" ? "white" : "black",
      }}
    >
      <h2 className="my-3 mx-2">About US</h2>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button" /*style={myStyle}*/
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Read Inside
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              /*style={myStyle}*/ style={{
                backgroundColor: props.mode === "dark" ? "black" : "white",
                color: props.mode === "dark" ? "white" : "black",
              }}
            >
              <strong>TextUtils: This simple application will make your task with text much easier. Explore It, Enjoy It :)</strong>
            </div>
          </div>
        </div>
      </div>
      {/* <button onClick={toggleStyle} className="btn btn-primary mx-2 my-3">
        {btntext}
      </button> */}
    </div>
  );
}
