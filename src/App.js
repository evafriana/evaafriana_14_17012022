import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateEmployee from "./pages/CreateEmployee";
import CurrentEmployee from "./pages/CurrentEmployee";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<CreateEmployee />} />
        <Route path="/employee-list" exact element={<CurrentEmployee />} />
      </Routes>
    </BrowserRouter>
  );
}
