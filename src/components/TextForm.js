import React from "react";
import { useState } from "react";

export default function TextForm(props) {
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleUpClick = () => {
    setPreviewText(text.toUpperCase());
    props.showAlert("Text has been converted to upper case", "success");
  };
  const handleDownClick = () => {
    setPreviewText(text.toLowerCase());
    props.showAlert("Text has been converted to lower case", "success");
  };
  const handleClear = () => {
    setText("");
    setPreviewText("");
  };
  const [text, setText] = useState("");
  const [previewText, setPreviewText] = useState("");
  // const [myStyle, setMyStyle] = useState({
  //     color: 'black',
  //     backgroundColor:'white'
  // })
  // if(props.mode==='light'){     not working because this should be inside a toggle handler
  //     setMyStyle({              should not be called everytime
  //         color: 'black',
  //         backgroundColor:'white'
  //     })
  // }
  // else {
  //     setMyStyle({
  //         color: 'white',
  //         backgroundColor:'black'
  //     })
  // }
  return (
    <>
      {/* style={{backgroundColor: props.mode==='light'?'white':'grey', color:props.mode==='light'?'white':'black'}} */}
      <div className="container">
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="5"
            style={{
              backgroundColor: props.mode === "dark" ? "white" : "grey",
              color: props.mode === "dark" ? "black" : "white",
            }}
          ></textarea>
        </div>
        <button className="btn btn-success mx-1" onClick={handleUpClick}>
          to uppercase
        </button>
        <button className="btn btn-success mx-1 my-1" onClick={handleDownClick}>
          to lowercase
        </button>
        <button className="btn btn-success mx-1 my-1" onClick={handleClear}>
          clear text
        </button>
      </div>
      <div className="container my-3">
        <h2>Text Summary</h2>
        <p>
          {
            text.split(" ").filter((val) => {
              return val.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <h2>Preview</h2>
        <p>
          {text.length === 0 ? "Enter your text in the box above" : previewText}
        </p>
      </div>
    </>
  );
}
