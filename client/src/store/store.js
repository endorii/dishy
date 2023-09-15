import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import employeesSlice from "./slices/employeesSlice";

const rootReducer = {
    user: userSlice,
    employees: employeesSlice
}

const store = configureStore({
    reducer: rootReducer
})

export default store;