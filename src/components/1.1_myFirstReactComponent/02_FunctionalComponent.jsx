// Exercise:
// 1. Create a React functional component
// 2. Pass in props (short for properties), similar to passing arguments to a JavaScript function. Both providing inputs to a piece of code.
// 3. Define prop types

import React from 'react'

const FunctionalComponent = (props) => {
  return (
    <>
      <h1>Hello, {props.value}!</h1>
      <p>This React component is made by a function expression; we call it a functional component!</p>
    </>
  );
}

export default FunctionalComponent;