import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { getAllNeeds } from "../../components/needs.actions";

const initialState = {
    needs: [],
    isLoading: false,
    error: null
}

export const fetchNeeds = createAsyncThunk(
    'needs/fetchNeeds',
    async () => {
        const response = getAllNeeds()
        return response;
    }
)

const needsSlice = createSlice({
    name: 'needs',
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(fetchNeeds.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(fetchNeeds.fulfilled, (state, action) => {
            state.isLoading = false;
            state.needs = action.payload;
        })
        .addCase(fetchNeeds.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        })
    }
});

export default needsSlice.reducer;