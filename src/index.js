import { StrictMode } from "react";
import ReactDOM from "react-dom";

import BirthdayReminderApp from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <BirthdayReminderApp />
  </StrictMode>,
  rootElement
);
