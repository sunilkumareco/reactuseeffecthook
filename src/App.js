import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";

function App() {

   // Declare state variables
   const [count, setCount] = useState(0);
  return (
    <div>
        Current Cart Count: {count}
            <div>
            <button onClick={() => setCount(count - 1)}>Add to cart</button>
            <button onClick={() => setCount(count + 1)}>Remove from cart</button>
            </div>
        </div>
  );
}

export default App;
