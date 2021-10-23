import React, { useState } from 'react';
import Home from './Views/Home';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Views/Login';
import Signup from './Views/Signup';


function App() {

  
  return (
    <Router>
    <Navbar/>
    <div className="App">
      <header className="App-header">
      <Switch>
        
          <Route exact path="/">
            <Home />
          </Route>


          <Route path="/login">
            <Login />
          </Route>
          
          <Route path="/signup">
            <Signup />
          </Route>

          
        </Switch>
      
        
      </header>
    </div>
    </Router>
   
  );
}

export default App;
