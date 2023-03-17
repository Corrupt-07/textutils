import React, { useState } from 'react'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";




function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setalert(null)
    }, 3000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark')
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled", "success")
    } else {
      setmode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success")
    }

  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} aboutText="About"></Navbar>
        <Alert alert={alert} />
        <div className='container my-3'>

          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<TextForm showAlert={showAlert} heading='Enter the text to analyze below' mode={mode}></TextForm>} />
          </Routes>


        </div>
      </Router>
    </>

  );
}

export default App;
