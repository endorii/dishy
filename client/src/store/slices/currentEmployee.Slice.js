// import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
// import { getAllOrders } from "../../components/ordersActions";

const initialState = {
    currentEmployee: {},
    isLoading: false,
    error: null
}

const currentEmployeeSlice = createSlice({
    name: 'currentEmployee',
    initialState,
    reducers: {
        setCurrentEmployee(state, action) {
            state.isAuth = false;
            state.currentEmployee = action.payload;
        }
    },
});

export const { setCurrentEmployee } = currentEmployeeSlice.actions;

export default currentEmployeeSlice.reducer;