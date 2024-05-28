import "./App.css";
import React from "react";
import FunctionComponent from "./components/1.1_myFirstReactComponent/01_FunctionComponent";
import FunctionalComponent from "./components/1.1_myFirstReactComponent/02_FunctionalComponent";
import ClassComponent from "./components/1.1_myFirstReactComponent/03_ClassComponent";

function App() {
  return (
    <>
      <FunctionComponent value="Earth" />
      <FunctionalComponent value="World" />
      <ClassComponent value="JSD7" />
    </>
  );
}

export default App;
