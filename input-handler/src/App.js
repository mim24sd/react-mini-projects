import { useState } from "react";
import { render } from "react-dom";

const App = () => {
  const [text, setText] = useState("");
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(event) => {
          setText(event.target.value);
        }}
      ></input>
      <p>{text}</p>
    </div>
  );
};

render(<App />, document.getElementById("root"));
