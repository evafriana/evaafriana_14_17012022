import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateEmployee from "./pages/CreateEmployee";
import CurrentEmployee from "./pages/CurrentEmployee";
import { useDispatch } from "react-redux";
import actions from "./store/actions";

export default function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    const employees = JSON.parse(localStorage.getItem("employees")) || [];
    dispatch(actions.loadEmployees(employees));
  }, [dispatch]);

  // seedDB();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<CreateEmployee />} />
        <Route path="/employee-list" exact element={<CurrentEmployee />} />
      </Routes>
    </BrowserRouter>
  );
}

const seedDB = () => {
  const employees = [
    {
      firstName: "John",
      lastName: "Doe",
      startDate: "04/14/2021",
      department: "Marketing",
      dateOfBirth: "01/01/1990",
      street: "Main Street",
      city: "NY",
      state: "AL",
      zipcode: "01800",
    },
    {
      firstName: "Elisa",
      lastName: "Tyrel",
      startDate: "03/02/2020",
      department: "Marketing",
      dateOfBirth: "01/25/1988",
      street: "Helia Street",
      city: "San Francisco",
      state: "AK",
      zipcode: "85699",
    },
  ];

  localStorage.setItem("employees", JSON.stringify(employees));
};
