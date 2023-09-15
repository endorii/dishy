import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllEmployees } from "../../components/employee";

const initialState = {
    employees: [],
    isLoading: false,
    error : null
} 

export const fetchEmployees = createAsyncThunk(
    'employees/fetchEmployees',
    async () => {
        const response = getAllEmployees();
        return response;
    }
)

const employeesSlice = createSlice({
    name: 'employees',
    initialState, 
    extraReducers: (builder) => {
        builder
        .addCase(fetchEmployees.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(fetchEmployees.fulfilled, (state, action) => {
            state.isLoading = false;
            state.employees = action.payload;
        })
        .addCase(fetchEmployees.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        })
    }
})

export default employeesSlice.reducer;