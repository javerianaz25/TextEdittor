import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
// import About from './components/About';
import Textform from './components/Textform';
import Alert from './components/Alert';


function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(21 55 135';
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
     
        <Navbar title="TextUtils" about="About Us" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
            {/* <Route exact path="/about" element={<About />} /> */}
            <Textform showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
          
        </div>
      
    </>
  );
}

export default App;
