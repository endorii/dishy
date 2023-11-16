import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import employeesSlice from "./slices/employeesSlice";
import positionsSlice from "./slices/positions.Slice";
import currentEmployeeSlice from "./slices/currentEmployee.Slice";
import ordersSlice from "./slices/ordersSlice";
import menuSlice from "./slices/menuSlice";
import menuItemsSlice from "./slices/menuItemsSlice";

const rootReducer = {
    user: userSlice,
    employees: employeesSlice,
    positions: positionsSlice,
    currentEmployee: currentEmployeeSlice,
    orders: ordersSlice,
    menu: menuSlice,
    menuItems: menuItemsSlice
}

const store = configureStore({
    reducer: rootReducer
})

export default store;