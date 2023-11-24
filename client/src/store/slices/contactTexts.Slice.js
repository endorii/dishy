import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { getAllContactTexts } from "../../components/contactText.actions";

const initialState = {
    contactTexts: [],
    isLoading: false,
    error: null
}

export const fetchContactTexts = createAsyncThunk(
    'contactTexts/fetchContactTexts',
    async () => {
        const response = getAllContactTexts()
        return response;
    }
)

const contactTextsSlice = createSlice({
    name: 'contactTexts',
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(fetchContactTexts.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(fetchContactTexts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.contactTexts = action.payload;
        })
        .addCase(fetchContactTexts.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        })
    }
});

export default contactTextsSlice.reducer;