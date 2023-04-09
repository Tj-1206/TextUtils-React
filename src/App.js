// app.js is our entire website

import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";
// import { BrowserRouter as Router, Switch, Route, Routes, Link } from "react-router-dom";

// function based component

// syntax:
// function name(){
//   return(
//     JSX Code
//   );
// };

function App() {
  const [mode, setMode] = useState("light");

  const removeBodyClasses = () => {
    document.body.classList.remove("bg-light");
    document.body.classList.remove("bg-dark");
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-success");
    document.body.classList.remove("bg-warning");
  };

  const toggleMode = (cls) => {
    removeBodyClasses();
    console.log(cls);
    document.body.classList.add("bg-" + cls);
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#1b1717eb";
      showAlert("Dark mode enabled", "success");
      document.title = "TextUtils - Dark Mode";
      // setInterval(() => {
      //   document.title = 'TextUtils is an Amazing tool'
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install TextUtils now'
      // }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };

  const [alert, setAlert] = useState(null); //alert is an object

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  return (
    <>
    {/* <Router> */}
      {/* imported from components */}
      {/* Here, title="TextUtils" is props */}
      <Navbar
        title="TextUtils"
        aboutText="About"
        mode={mode}
        toggleMode={toggleMode}
      />

      <Alert alert={alert} />

      <div className="container my-3">
        {/* <Routes> */}
          {/* exact keyword helps in complete matching of path, as react by default does partial path matching */}
          {/* <Route exact path="/about" element={<About />} />
          
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter text: " mode={mode} />} /> */}

          <TextForm showAlert={showAlert} heading="Enter text: " mode={mode} />

        {/* </Routes> */}
      </div>
    {/* </Router> */}
    </>
  );
}

export default App;
