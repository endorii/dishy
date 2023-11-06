import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { getAllOrders } from "../../components/ordersActions";

const initialState = {
    orders: [],
    isLoading: false,
    error: null
}

export const fetchOrders = createAsyncThunk(
    'orders/fetchOrders',
    async () => {
        const response = getAllOrders()
        return response;
    }
)

const ordersSlice = createSlice({
    name: 'orders',
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(fetchOrders.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(fetchOrders.fulfilled, (state, action) => {
            state.isLoading = false;
            state.orders = action.payload;
        })
        .addCase(fetchOrders.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        })
    }
});

export default ordersSlice.reducer;