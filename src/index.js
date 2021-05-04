import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { LibraryProvider } from "./Context/LibraryContext";
import App from "./App";
import { ToggleProvider } from "./Context/ToggleContext";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Router>
      <LibraryProvider>
        <ToggleProvider>
          <App />{" "}
        </ToggleProvider>
      </LibraryProvider>
    </Router>
  </StrictMode>,
  rootElement
);
