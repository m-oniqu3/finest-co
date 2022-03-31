import React from "react";
import { Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";

function App() {
  return (
    <div>
      <Header />
      <Routes>{/* <Route path="/home" element={} /> */}</Routes>
    </div>
  );
}

export default App;
