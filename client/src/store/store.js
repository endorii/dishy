import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import employeesSlice from "./slices/employeesSlice";
import positionsSlice from "./slices/positions.Slice";
import onlineEmployeeSlice from "./slices/onlineEmployee.Slice";
import ordersSlice from "./slices/ordersSlice";
import menuSlice from "./slices/menuSlice";
import menuItemsSlice from "./slices/menuItemsSlice";
import needsSlice from "./slices/needs.Slice";
import contactTextsSlice from "./slices/contactTexts.Slice";
import currentEmployeeSlice from "./slices/currentEmployee.Slice";

const rootReducer = {
    user: userSlice,
    employees: employeesSlice,
    positions: positionsSlice,
    onlineEmployees: onlineEmployeeSlice,
    orders: ordersSlice,
    menu: menuSlice,
    menuItems: menuItemsSlice,
    needs: needsSlice,
    contactTexts: contactTextsSlice,
    currentEmployee: currentEmployeeSlice,
}

const store = configureStore({
    reducer: rootReducer
})

export default store;