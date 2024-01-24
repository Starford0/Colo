import { createSlice } from "@reduxjs/toolkit";

const initialState={
    allProduct: [],
    myCart: [],
};

const ProductState = createSlice({
    name:"product",
    initialState,
    reducers:{
        GetAllProduct:(state, {payload})=>{
            state.allProduct = payload
        },
        AddToCart:(state, {payload})=>{
            state.myCart.push(payload)
            // console.log(payload)
        },
        DeleteFromCart:(state, {payload})=>{
        return {...state, myCart:state.myCart.filter((e)=> e.id !== payload.id),}
        },
    }
})

export const {GetAllProduct, AddToCart,DeleteFromCart} = ProductState.actions;
export default ProductState.reducer;