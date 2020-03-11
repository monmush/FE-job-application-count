import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import './App.css';
import Landing from './pages/Landing/Landing';

function App() {
  return (
   <Router>
     <Route exact path="/" component={Landing}/>
   </Router>
  );
}

export default App;
