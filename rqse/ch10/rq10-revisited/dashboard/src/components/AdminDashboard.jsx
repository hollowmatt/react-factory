import { useState } from 'react';
import Dashbaord from './Dashboard';

function AdminDashboard() {
  const [user, setUser] = useState("Milkshake");

  return(
    <>
      <select value={user} onChange={(evt) => setUser(evt.target.value)}>
        <option>Milkshake</option>
        <option>Catnip</option>
        <option>Shivers</option>
        <option>Bella</option>
      </select>
      <Dashbaord name={user} />
    </>
  );

}

export default AdminDashboard;