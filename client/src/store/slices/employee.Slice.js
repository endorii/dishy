import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    employee: {},
    isAuth: false
}

const employeeSlice = createSlice({
    name: "employee",
    initialState,
    reducers:{
        setEmployee(state, action){
            state.isAuth = true;
            state.employee = action.payload;
        },
        logout(state){
            // localStorage.removeItem('token');
            state.isAuth = false;
            state.employee = {};
        }
    }
})

export const {setEmployee, logout} = employeeSlice.actions;

export default employeeSlice.reducer;