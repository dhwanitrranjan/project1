import { createSlice } from '@reduxjs/toolkit';
import { configureStore } from "@reduxjs/toolkit";


export const allProductsSlice = createSlice({
    name:"AllProducts",
    initialState:{
        allProducts:[],
        selectedCard:"",
        cart: {},
        cartCount: 0,
        address: ""
    },
    reducers: {
        isSelected: (state, action)=> {
            state.selectedCard = action.payload;
        },
        loadAllProducts: (state, action) => {
            state.allProducts = action.payload;
        },
    }
}); 

export default configureStore ({
    reducer: allProductsSlice.reducer
})

export const { isSelected, loadAllProducts} = allProductsSlice.actions;

