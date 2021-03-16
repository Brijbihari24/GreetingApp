import logo from "./logo.svg";
import "./App.css";

import Heading from "./Heading";
import Para from "./Para";
import List from "./List";
import Calc,{ add, sub, mul, div } from "./Calc"

function App() {
 
  return (
    <div className="">
      <Heading />
      <Para />
      <List />
     
    </div>
  );
}

export default App;
