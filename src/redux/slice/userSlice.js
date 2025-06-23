import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsers = createAsyncThunk('users/',async () => {
    const res = await axios.get('https://dummyjson.com/users');
    return res.data.users;
});


const userSlice = createSlice({
    name:"user",
    initialState:{
        users: [],
        loading: false,
        error: null
    },
    reducers:{},
    extraReducers:(builder) => {
        builder
            .addCase(getUsers.pending,(state) => {
                state.loading = true;
            })
            .addCase(getUsers.fulfilled,(state,action) => {
                state.loading = false;
                state.users = action.payload;
            })
            .addCase(getUsers.rejected,(state,action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
})

export const { } = userSlice.actions;
export default userSlice.reducer;