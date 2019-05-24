import * as React from "react";
import "./css/reset.css";
import "./sass/main.scss";
import marilyn from "./img/marilyn.jpg";

const App = () => {
  return (
    <div>
      <p>This is react!</p>
      <img src={marilyn} width="100%" />
    </div>
  );
};

export default App;
