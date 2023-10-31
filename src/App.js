import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Textform from './components/Textform';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const removeBodyClasses = ()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
}

  const toggleMode = (cls) => {
    removeBodyClasses();
    document.body.classList.add('bg-'+ cls)
    
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(4 39 67)';
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  };

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

  return (
    <>
     <Router>
        <Navbar title="TextEditor" about="About Us" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
            <Route exact path="/about" element={<About mode={mode} />} />
           <Route exact path="" element={<Textform showAlert={showAlert} heading="TextEditor - Word Counter, Character Counter, Remove extra spaces" mode={mode} />} />
          
        
        </Routes>
        </Router>
    </>
  );
}

export default App;
