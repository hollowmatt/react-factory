import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FirstStep from "../components/FirstStep";
import SecondStep from "../components/SecondStep";
import ThirdStep from "../components/ThirdStep";
import Header from "../components/Header";

function AppRouter() {
  return(
    <BrowserRouter>
      <div className="container">
        <Header />
        <Routes>
          <Route element={<FirstStep/>} path="/"/>
          <Route element={<SecondStep />} path="/second"/>
          <Route element={<ThirdStep />} path="/third"/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default AppRouter;