import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateEmployee from "./pages/CreateEmployee";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<CreateEmployee />} />
      </Routes>
    </BrowserRouter>
  );
}
