import React from 'react';
import Home from './Views/Home';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Views/Login';
import Signup from './Views/Signup';
import Cart from './Views/Cart';
import {CartProvider} from './Context/CartContext';



function App() {


  return (
    <div className="App">
      <CartProvider>

      <Router>
      <Navbar />
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

      <Route path="/Cart">
      <Cart />
      </Route>


      </Switch>


      </header>
    </Router >
    </CartProvider>
    </div>

  );
}

export default App;
