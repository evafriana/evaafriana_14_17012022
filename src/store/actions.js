import { createAction } from "@reduxjs/toolkit";

const actions = {
  createEmployee: createAction("createEmployee"),
  loadEmployees: createAction("loadEmployees"),
};

export default actions;
