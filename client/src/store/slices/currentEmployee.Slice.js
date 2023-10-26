import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCurrentEmployee } from "../../view/pages/Access/Employees/employee";

const initialState = {
    currentEmployee: {},
    isAuth: false
}

export const fetchCurrentEmployee = createAsyncThunk(
    'currentEmployee/fetchCurrentEmployee',
    async () => {
        const response = getCurrentEmployee();
        return response;
    }
)

const currentEmployeeSlice = createSlice({
    name: "currentEmployee",
    initialState,
    reducers: {
        logout(state) {
            state.isAuth = false;
            state.currentEmployee = {};
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCurrentEmployee.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchCurrentEmployee.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isAuth = true;
                state.currentEmployee = action.payload;
            })
            .addCase(fetchCurrentEmployee.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error;
            })
    }
})

export const { setCurrentEmployee, logout, setInitialWorkingTime } = currentEmployeeSlice.actions;

export default currentEmployeeSlice.reducer;