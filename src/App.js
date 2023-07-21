import "./App.css";
import { useState } from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Routes, //Switch updated to Routes in latest version of react-router-dom
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("dark");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const themeHandler = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "rgb(77 69 69)";
      showAlert("dark mode enabled", "dark");
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "white";
      showAlert("light mode enabled", "light");
    }
  };

  return (
    <>
      <Router>
        <Navbar
          heading="TextUtils"
          mode={mode === "light" ? "dark" : "light"}
          themeHandler={themeHandler}
        ></Navbar>
        <Alert alert={alert} />

        <div
          style={{
            backgroundColor: mode === "light" ? "rgb(77 69 69)" : "white",
            color: mode === "light" ? "white" : "black",
          }}
        >
          <div className="container my-3">
            {/* <TextForm heading="Enter the text you want to use" mode={mode} showAlert={showAlert}></TextForm> */}
            <Routes>
              <Route path="/about" element={<About mode={mode} />} />
              <Route
                path="/textform"
                element={
                  <TextForm
                    heading="Enter the text you want to use"
                    mode={mode}
                    showAlert={showAlert}
                  ></TextForm>
                }
              />
            </Routes>
          </div>
          {/* <About mode={mode==='light'?'dark':'light'}/> */}
        </div>
      </Router>
    </>
  );
}

export default App;
