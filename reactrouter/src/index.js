import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Invoices from "./routes/invoices";
import Expenses from "./routes/expenses";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="expenses" element={<Expenses />}/>
      <Route path="invoices" element={<Invoices/>}/>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
