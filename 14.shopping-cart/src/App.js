import './App.css';
import Cart from "./Cart.js";


const items = [
  {id:1, name: "Captain Crunch All Berries", price: 7.56, qty: 2},
  {id:2, name: "Chex Mix", price: 2.99, qty: 3},
  {id:3, name: "Monster Energy 4pack", price: 13.23, qty: 5},
];

function App() {
  return (
    <div className="App">
    <Cart initialItems={items} />
    
    </div>
  );
}

export default App;
