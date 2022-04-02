import React, { useState } from "react";
import "./App.css";
import { collection, addDoc } from "firebase/firestore";
import db from "./firebase";

function App() {
const [customerName, setCustomerName] = useState("");
const [customerPassword, setCustomerPassword] = useState("");

async function submit(e) {
	e.preventDefault();
  try {
    const docRef = await addDoc(collection(db, "customersData"), {
      name: customerName,
	    password: customerPassword,
	  });
    console.log("doc written: ", docRef.id);
    setCustomerName("");
	  setCustomerPassword("");
	} catch(e) {
    console.error("error adding doc: ", e);
  }
}

return (
	<div className="App">
	<div className="App__form">
		<input
		type="text"
		placeholder="Name"
		value={customerName}
		onChange={(e) => setCustomerName(e.target.value)}
		/>
		<input
		type="text"
		placeholder="Password"
		value={customerPassword}
		onChange={(e) => setCustomerPassword(e.target.value)}
		/>
		<button onClick={submit}>Submit</button>
	</div>
	</div>
);
}

export default App;

