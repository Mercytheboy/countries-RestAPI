import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Homepage from "./sections/homepage/Homepage";
import CountryDetails from "./sections/countrydetails/CountryDetails";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/country/:name" element={<CountryDetails />} />
      </Routes>
    </div>
  );
}

export default App;
