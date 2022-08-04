import { createSlice } from '@reduxjs/toolkit';


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
        loadcartCount: (state, action)=> {
            state.cartCount += 1;
        },
        addtoCart: (state, action) =>{
            state.cart = action.payload
        },
        ShippingAddress: (state, action) =>{
            state.address = action.payload
        }
    }
}); 

export default allProductsSlice.reducer

export const { isSelected, loadAllProducts, loadcartCount, addtoCart, ShippingAddress } = allProductsSlice.actions;