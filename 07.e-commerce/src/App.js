import React, { useState, useEffect } from 'react';
import Home from './Views/Home';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Views/Login';
import Signup from './Views/Signup';
import Cart from './Views/Cart';
import {CartProvider} from './Context/CartContext';
import * as constants from './constants';
import ItemPage from './components/ItemPage';
import GlobalSearch from './components/GlobalSearch';


function App() {

  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(constants.apiUrl)
        .then((response) => response.json())
        .then((e) => setItems(e))
}, []);

  return (
    <div className="App">
      <CartProvider>

      <Router>
      
      
      <Navbar items={items} />
      
      <header className="App-header">
      <Switch>

  

      <Route exact path="/">
      <Home />
      </Route>


      {items.map((e) => {
        return (
        <Route path={`/${e._id}`}>
          <ItemPage item={e}  />
        </Route>
        )
      })}

      
{items.map((e) => {
        return (
        <Route path={`/${e._id}`}>
          <GlobalSearch item={e}  />
        </Route>
        )
      })}







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
