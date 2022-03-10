import * as React from "react";
import { Outlet, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="container mx-auto">
      <div className="row-auto">
        <div className="columns-auto">
          <h1>Bookkeeper</h1>
        </div>
      </div>
      <div className="row-auto">
        <div class="flex">
            <Link className="mr-6 text-blue-500 hover:text-blue-800" to="/">Home</Link> 
            <Link className="mr-6 text-blue-500 hover:text-blue-800" to="/invoices">Invoices</Link>
            <Link className="mr-6 text-blue-500 hover:text-blue-800" to="/expenses">Expenses</Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default App;