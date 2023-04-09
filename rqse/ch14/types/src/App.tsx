import React from 'react';
import EmployeeCard from './Employee.tsx';
import "./App.css";

function App() {
  return(
    <main>
      <EmployeeCard item={{ name: "Willy Wonka", title: "Candy King" }} />
    </main>
  );
}

export default App;