import { useState } from 'react';
import Dashboard from './Dashboard';

function AdminDashboard() {
    const [user, setUser] = useState("Bella");
    return(
        <div>
            <select value={user} onChange={(evt) => {setUser(evt.target.value);}}>
                <option>Catnip</option>
                <option>Milkshake</option>
                <option>Shivers</option>
                <option>Bella</option>
            </select>
            <Dashboard name={user}/>
        </div>
    );
}

export default AdminDashboard;