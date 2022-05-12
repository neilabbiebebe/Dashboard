import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage3Light from "./pages/Homepage3Light";


import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Homepage3Light/>}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
