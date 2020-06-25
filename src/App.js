import React from "react";
import logo from "./logo.png";
import Input from "./InputComponent";

const App = () => {
  return (
    <div>
      <img src={logo} alt="logo" />
      <Input></Input>
    </div>
    <div>
      <p>Welcome to Fanbank</p>
    </div>
  );
};

export default App;
