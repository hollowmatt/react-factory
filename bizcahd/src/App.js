import React, { useEffect, useState } from "react";
import "./App.css";
import db from "./firebase";
import { addDoc, collection, doc, getDocs } from "firebase/firestore";


function App() {
  const [customerName, setCustomerName] = useState("");
  const [customerPassword, setCustomerPassword] = useState("");
  const [customersData, setCustomersData] = useState([]);

  useEffect(() => {
    getData();
  }, [])

  async function getData() {
    const querySnapshot = await getDocs(collection(db, "customersData"));
    setCustomersData(
      querySnapshot.docs.map((item) => ({
        id: item.id,
        data: item.data(),
      }))
    );
  }
  
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
      <div className="App__DataDisplay">
        <table>
          <thead>
            <tr>
              <th>NAME</th>
              <th>PASSWORD</th>
            </tr>
          </thead>
          <tbody>
            {customersData?.map(({ id, data }) => (
              <tr key={id}>
                <td>{data.name}</td>
                <td>{data.password}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;

