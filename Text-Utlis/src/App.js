import "./App.css";
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import About from "./components/About";
import {
  HashRouter as Router,
  Route,
  Routes
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
      {/* Navbar stays visible on all routes */}
      <Navbar title="Text Utils" aboutTxt="About Text Utils" Mode={Mode} toggleMode={toggleMode} />
      
      {/* Show alerts at the top */}
      <Alert alert={alert} />
      
      {/* Routes define which main content to show */}
      <div className="container my-3">
        <Routes>
          <Route
            path="/"
            element={<TextForm showAlert={showAlert} Mode={Mode} heading="Enter the text to analyse" />}
          />
          <Route path="/about" element={<About Mode={Mode} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
