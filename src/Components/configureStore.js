import { configureStore } from "@reduxjs/toolkit";
import { allProductsSlice } from "./reducers"

export default configureStore ({
    reducer: allProductsSlice.reducer
})