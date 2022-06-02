import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import Counters from "./components/Counters";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Expenses from "./expenses";
import TestSite from "./TestSite";
import Page from './Page'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Counters /> */}
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Counters />} />
          <Route path="/expenses" element={<Expenses />} />
          <Route path="/TestSite" element={<TestSite />} />
          <Route path="/Page" element={<Page />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
