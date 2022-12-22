import { useState } from 'react';
import Dashboard from './Dashboard';

function AdminDashboard() {
    const [user, setUser] = useState("Alice");
    return(
        <div>
            <select value={user} onChange={(evt) => {setUser(evt.target.value);}}>
                <option>Alice</option>
                <option>Bob</option>
                <option>Catnip</option>
            </select>
            <Dashboard name={user}/>
        </div>
    );
}

export default AdminDashboard;