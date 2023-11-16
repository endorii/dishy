import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getMenuItems } from "../../view/pages/Menu/Dishes/menuItemActions";

const initialState = {
    menuItems: [],
    isLoading: false,
    error: null
}

export const fetchMenuItems = createAsyncThunk(
    'menuItems/fetchMenuItems',
    async () => {
        const response = getMenuItems();
        return response;
    }
)

const menuSlice = createSlice({
    name: 'menuItems', 
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(fetchMenuItems.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(fetchMenuItems.fulfilled, (state, action) => {
            state.isLoading = false;
            state.menuItems = action.payload;
        })
        .addCase(fetchMenuItems.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        })
    }
})

export default menuSlice.reducer