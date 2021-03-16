import React from "react";

function Calc(params) {
  return;
}

let a;
let b;

function add(a, b) {
  let sum = a + b;
  return sum;
}
function sub(a, b) {
  let result = a - b;
  return result;
}
function mul(a, b) {
  let result = a * b;
  return result;
}
function div(a, b) {
  let result = a / b;
  result = result.toFixed(2);
  return result;
}

export default Calc;

export { add, sub, mul, div };
