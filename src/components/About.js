import React, { useState } from "react";

export default function About(props) {
  //   const [myStyle, changeMyStyle] = useState({
  //     color: 'white',
  //     backgroundColor: 'black'
  //   })

  //   const [text, changeText] = useState('Enable Dark Mode')
  //   const toggleHandler=()=>{
  //     if(myStyle.color==='white'){
  //         changeMyStyle({
  //             color: 'black',
  //             backgroundColor: 'white'
  //         })
  //         changeText('Enable Dark Mode')
  //     }
  //     else{
  //         changeMyStyle({
  //             color: 'white',
  //             backgroundColor: 'black'
  //         })
  //         changeText('Enable Light Mode')

  //     }
  //   }
  return (
    <div className="container">
      <h1>About Us</h1>
      <div
        className="accordion"
        id="accordionExample"
        style={{
          backgroundColor: props.mode === "light" ? "rgb(77 69 69)" : "white",
          color: props.mode === "light" ? "white" : "black",
        }}
      >
        <div
          className="accordion-item"
          style={{
            backgroundColor: props.mode === "light" ? "white" : "rgb(77 69 69)",
            color: props.mode === "light" ? "black" : "white",
          }}
        >
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Analyze your text
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              This website allows you to analyze any piece of text which is of
              importance to you.
            </div>
          </div>
        </div>
        <div
          className="accordion-item"
          style={{
            backgroundColor: props.mode === "light" ? "white" : "rgb(77 69 69)",
            color: props.mode === "light" ? "black" : "white",
          }}
        >
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Absolutely Free !!!
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              This website is completely free to use. So you can analyze as much
              text as you want for no cost.
            </div>
          </div>
        </div>
        <div
          className="accordion-item"
          style={{
            backgroundColor: props.mode === "light" ? "white" : "rgb(77 69 69)",
            color: props.mode === "light" ? "black" : "white",
          }}
        >
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              One of the Best
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Textutils provides you one of the best experience for text
              analysis which you might not get using other text analyzers
              available anywhere else.
            </div>
          </div>
        </div>
      </div>
      {/* <button onClick = {toggleHandler} className="my-2 btn btn-danger">{text}</button> */}
    </div>
  );
}
