import React, { useState } from "react";
import { Input } from "./components/Input";
import logo from "./logo.png";

const App = () => {
  const [message, setMessage] = useState("");

  return (
    <>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div>
        <p>Welcome to Plink</p>
        <Input value={message} onChange={(e) => setMessage(e.target.value)} />
      </div>
    </>
  );
};

export default App;
