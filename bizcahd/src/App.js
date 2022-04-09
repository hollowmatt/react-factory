import React, { useEffect, useState } from "react";
import "./App.css";
import db from "./firebase";
import { addDoc, doc, collection, query, where, onSnapshot, getDocs } from "firebase/firestore";


function App() {
  const [customerName, setCustomerName] = useState("");
  const [customerPassword, setCustomerPassword] = useState("");
  const [customersData, setCustomersData] = useState([]);

  async function getData() {
    const querySnapshot = await getDocs(collection(db, "customersData"));
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
    
    setCustomersData(
      querySnapshot.forEach((doc) => ({
        id: doc.id,
        data: doc.data(),
      }))
    );
    // customersData?.map(({id, data} ) => {
    //   console.log(`ID: ${id}, Name: ${data.name}, Password: ${data.password}`);
    // });
  }

  useEffect(() => {
    getData();
  }, [])
  
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
          <tr>
            <th>NAME</th>
            <th>PASSWORD</th>
          </tr>
  
          {customersData?.map(({ id, data }) => (
            <tr key={id}>
              <td>{data.name}</td>
              <td>{data.password}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}

export default App;

