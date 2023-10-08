import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentEmployee: {},
    isAuth: false
}

const currentEmployeeSlice = createSlice({
    name: "currentEmployee",
    initialState,
    reducers: {
        setCurrentEmployee(state, action){
            state.isAuth = true;
            state.currentEmployee = action.payload;
        },
        logout(state) {
            state.isAuth = false;
            state.currentEmployee = {};
        }
    },
})

export const { setCurrentEmployee, logout } = currentEmployeeSlice.actions;

export default currentEmployeeSlice.reducer;