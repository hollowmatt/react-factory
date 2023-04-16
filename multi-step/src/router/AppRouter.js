import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FirstStep from "../components/FirstStep";
import SecondStep from "../components/SecondStep";
import ThirdStep from "../components/ThirdStep";
import Header from "../components/Header";

function AppRouter() {  
  const [user, setUser] = useState({});

  const updateUser = (data) => {
    setUser((prevUser) => ({...prevUser, ...data}));
    console.log(user);
  };

  const resetUser = () => {
    setUser({});
  };

  return(
    <BrowserRouter>
      <div className="container">
        <Header />
        <Routes>
          <Route element={<FirstStep user={user} updateUser={updateUser} />} path="/"/>
          <Route element={<SecondStep user={user} updateUser={updateUser}/>} path="/second"/>
          <Route element={<ThirdStep user={user}/>} path="/third"/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default AppRouter;