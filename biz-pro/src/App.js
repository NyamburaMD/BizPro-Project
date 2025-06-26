import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import './Styles/App.css';
import './Styles/NavBar.css';
import './Components/reusable components/Login'

function App() {
  return (
    <Router>
      <NavBar />
    </Router>
  )
};
 

export default App;
