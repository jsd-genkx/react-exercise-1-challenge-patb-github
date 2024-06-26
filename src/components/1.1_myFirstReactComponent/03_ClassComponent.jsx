// Exercise:
// 1. Create a React class component
// 2. Pass in props (short for properties), similar to passing arguments to a JavaScript function. Both providing inputs to a piece of code.
// 3. Define prop types

import React, { Component } from 'react';
import PropTypes from "prop-types";

export default class ClassComponent extends Component {
  render(props) {
    return (
      <>
        <h1>Hello, {this.props.value}!</h1>
        <p>This React component is made by a function declaration; we call it a function component!</p>
      </>
    )
  }
}

ClassComponent.propTypes = {
  value: PropTypes.string
}