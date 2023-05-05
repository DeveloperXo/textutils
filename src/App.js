import React, {useState} from 'react';
import './App.css';
import Navbar  from './components/Navigation';
import TextForm from './components/TextForm'
import Alert from './components/Alert';
import About from './components/About';
import {BrowserRouter as Router, Switch, Rout, Link} from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light') // dark mde disabled 
  const toggleMode = () => {
    if(mode === 'light'){
        setMode('dark');
        document.body.style.backgroundColor = 'rgb(18, 18, 75)';
        showAlert('Dark mode enabled!', 'success');
    }else{
        setMode('light');
        document.body.style.backgroundColor = 'rgb(254, 255, 255)';
        showAlert('Dark mode disabled!', 'success');
    }
  }

// Alert message
    const [alert, setAlert] = useState({msg: 'Hi', type:'danger'});
    const showAlert = (message, type) => {
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(()=>{
        setAlert({
          msg: null,
          type: null
        })
      }, 4500)
    }

  return (
    <>
    <Router>
        <Navbar  title='TextUtils' link1='Home' mode={mode} toggleMode={toggleMode}  />
        <Alert alert={alert} />
        <Switch path='/'>
          <div className="container">
            <TextForm showAlert={showAlert} heading="Enter your text below to analyze" mode={mode} />
          </div>
        </Switch>
        <Switch exact path='/about'>
          {/* <About /> */}
        </Switch>
    </Router>
    </>
  );
}

export default App;


