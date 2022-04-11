import React, { useEffect, useState } from "react";
import "./App.css";
import db from "./firebase";
import { addDoc, collection, deleteDoc, doc, getDocs, setDoc } from "firebase/firestore";


function App() {
  const [customerName, setCustomerName] = useState("");
  const [customerPassword, setCustomerPassword] = useState("");
  const [customersData, setCustomersData] = useState([]);
  const [updatedCustomerName, setUpdatedCustomerName] = useState("");
  const [updatedCustomerPassword, setUpdatedCustomerPassword] = useState("");
  const [dataIdToBeUpdated, setDataIdToBeUpdated] = useState("");

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
    getData();
  }

  async function update(e) {
    e.preventDefault();
    const custData = doc(db, 'customersData', dataIdToBeUpdated);
    setDoc(custData, {name: updatedCustomerName, password: updatedCustomerPassword}, {merge: true});
    
    setUpdatedCustomerName("");
    setUpdatedCustomerPassword("");
    setDataIdToBeUpdated("");

    getData();
  }

  function cancelUpdate() {
    setUpdatedCustomerName("");
    setUpdatedCustomerPassword("");
    setDataIdToBeUpdated("");
  }

  async function deleteData(id) {
    await deleteDoc(doc(db, "customersData", id));
    getData();
  }

  return (
    <div className="App">
    {!dataIdToBeUpdated ? (
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
    ) : (
      <div className="App__Updateform">
        <input
        type="text"
        placeholder="Name"
        value={updatedCustomerName}
        onChange={(e) => setUpdatedCustomerName(e.target.value)}
        />
        <input
        type="text"
        placeholder="Password"
        value={updatedCustomerPassword}
        onChange={(e) => setUpdatedCustomerPassword(e.target.value)}
        />
        <button onClick={update}>Submit</button> &nbsp;
        <button onClick={cancelUpdate}>Cancel</button>
      </div>
    )}
      <div className="App__DataDisplay">
        <table>
          <thead>
            <tr>
              <th>NAME</th>
              <th>PASSWORD</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {customersData?.map(({ id, data }) => (
              <tr key={id}>
                <td>{data.name}</td>
                <td>{data.password}</td>
                <td>
                  <button
                    onClick={() => {
                      setDataIdToBeUpdated(id);
                      setUpdatedCustomerName(data.name);
                      setUpdatedCustomerPassword(data.password);
                    }}
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      deleteData(id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;

