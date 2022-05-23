import React, { useState } from "react";
import { Input } from "./components/Input";
import logo from "./logo.png";
import { AppContainer } from "./styles";
import { GlobalStyle } from "./global-sytle";
import { ResponsiveImage } from "./components/ResponsiveImage";

const App = () => {
  const [message, setMessage] = useState("");

  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <div>
          <ResponsiveImage src={logo} alt="logo" />
        </div>
        <div>
          <p>Welcome to Plink</p>
          <p>Message: {message}</p>
          <Input value={message} onChange={(e) => setMessage(e.target.value)} />
        </div>
      </AppContainer>
    </>
  );
};

export default App;
