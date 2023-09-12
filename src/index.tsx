import * as React from "react";
import ReactDOM from "react-dom/client";

import Button from "./components/Button";

import "./index.css";

export default function App() {
  return (
    <div className="App">
      <Button text="This is a button element" />
    </div>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(<App />);
