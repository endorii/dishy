import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getOnlineEmployees } from "../../view/pages/Access/Employees/employee";

const initialState = {
    onlineEmployees: {},
    isAuth: false, 
    isLoading: false,
    error: null
}

export const fetchOnlineEmployees = createAsyncThunk(
    'onlineEmployee/fetchOnlineEmployees',
    async () => {
        const response = getOnlineEmployees();
        return response;
    }
)

const onlineEmployeeSlice = createSlice({
    name: "onlineEmployees",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchOnlineEmployees.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchOnlineEmployees.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isAuth = true;
                state.onlineEmployees = action.payload;
            })
            .addCase(fetchOnlineEmployees.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error;
            })
    }
})

export default onlineEmployeeSlice.reducer;