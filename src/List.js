import React from "react";
import Taskx, { tasky, name, lastname } from "./Component";
import Calc, { add, sub, mul, div } from "./Calc";

function List() {
  return (
    <div>
      <ol>
        <li>Complete react co.</li>
        <li>record YT vid.</li>
        <li>Complete HC sir react co.</li>
        <li>task4</li>
        <li>task5</li>
        <li>{Taskx}</li>
        <li>{tasky}</li>
        <li>{name()}</li>
        <li>{lastname()}</li>
      </ol>

      <ol>
        <li>the sum of two numbers is-{add(20, 5)} </li>
        <li>the sub of two numbers is-{sub(40, 10)} </li>
        <li>the mul of two numbers is-{mul(10, 5)} </li>
        <li>the div of two numbers is-{div(31, 4)} </li>
      </ol>
    </div>
  );
}
export default List;
