import "./App.css";
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [Mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (Mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      document.body.style.color = 'white';
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <Router>
      <Navbar title="Text Utils" aboutTxt="About Text Utils" Mode={Mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container">
        <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/" element={<TextForm showAlert={showAlert} Mode = {Mode} heading="Enter the text to analyse" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

