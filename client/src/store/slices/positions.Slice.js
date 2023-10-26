import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllPositions } from "../../view/pages/Access/Positions/positions";

const initialState = {
    positions: [],
    isLoading: false,
    error : null
} 

export const fetchPositions = createAsyncThunk(
    'positions/fetchPositions',
    async () => {
        const response = getAllPositions();
        return response;
    }
)

const positionsSlice = createSlice({
    name: 'positions',
    initialState, 
    extraReducers: (builder) => {
        builder
        .addCase(fetchPositions.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(fetchPositions.fulfilled, (state, action) => {
            state.isLoading = false;
            state.positions = action.payload;
        })
        .addCase(fetchPositions.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        })
    }
})

export default positionsSlice.reducer;