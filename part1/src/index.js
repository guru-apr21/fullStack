import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = () => {
  const a = 10;
  const b = 20;

  const [date, setDate] = useState(new Date());

  setTimeout(() => setDate(new Date()), 1000);

  return (
    <div>
      <p>Hello world, it is {date.toString()}</p>
      <p>
        {a} plus {b} is {a + b}
      </p>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
