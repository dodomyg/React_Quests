// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// export const getProducts = createAsyncThunk("api/getProducts", async () => {
//   const resp = await fetch("https://dummyjson.com/products");
//   const data = await resp.json();
//   return data;
// })

// const apiSlice = createSlice({
//   name:"api",
//   initialState:{
//     data:[],
//     loading:false,
//     error:null
//   },
//   reducers:{},
//   extraReducers:(builder)=>{
//     builder.addCase(getProducts.pending,(state)=>{
//       state.loading = true
//     }).addCase(getProducts.fulfilled,(state,action)=>{
//       state.loading = false
//       state.data = action.payload
//     })
//   }
// });


// export const {  } = apiSlice.actions;
// export default apiSlice.reducer;