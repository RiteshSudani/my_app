import "./App.css";
import Navbar from "./Navbar";
import About from "./About";
import Textform from "./Textform";
import React, { useState } from "react";
import Alert from "./Alert";
import { BrowserRouter as Router , Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (messege, type) => {
    setAlert({
      msg: messege,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      document.body.style.color = "white";
      showAlert(" dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert(" light mode has been enabled", "success");
    }
  };

  return (
    <>
      <Router>
      <Navbar
        title="TextUtils"
        mode={mode}
        toggleMode={toggleMode}
        about="about us"
      />
      <Alert alert={alert} />
      
        <Routes>
        {/* <Route path='/' element={<Textform/>}/> */}
        <Route exect path='/textform' element={<Textform/>}/>
          <Route exact path='/about' element={<About/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
