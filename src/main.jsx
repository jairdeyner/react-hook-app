import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { FocusScreen } from "./04-useRef/FocusScreen";
// import { MultipleCustomHooks } from "./03-examples/MultipleCustomHooks";
// import { FormWithCustomHook } from "./02-useEffect/FormWithCustomHook";
// import { SimpleForm } from "./02-useEffect/SimpleForm";
// import { CounterWithCustomHook } from "./01-useState/CounterWithCustomHook";
// import { HooksApp } from "./HooksApp";
// import { CounterApp } from "./01-useState/CounterApp";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FocusScreen />
  </StrictMode>
);
