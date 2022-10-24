import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter ,
          Routes,
          Route
} from "react-router-dom";
import "./index.css";
import App from "./App";
import Search from "./components/Search";


ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<App />} />
      <Route path="/search" element={<Search />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
