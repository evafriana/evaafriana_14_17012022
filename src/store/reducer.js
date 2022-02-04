import { createReducer } from "@reduxjs/toolkit";
import actions from "./actions";

const initialValues = {
  data: [],
};

const reducer = createReducer(initialValues, {
  [actions.createEmployee.type]: (state, { payload }) => {
    const employees = [...state.data, JSON.parse(payload)];
    localStorage.setItem("employees", JSON.stringify(employees));
    Object.assign(state, {
      data: employees,
    });
  },
  [actions.loadEmployees.type]: (state, { payload }) => {
    Object.assign(state, {
      data: payload,
    });
  },
});

export default reducer;
