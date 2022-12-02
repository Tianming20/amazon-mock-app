import {configureStore} from "@reduxjs/toolkit"
import sellingProductsReducer from "./modules/SellingProducts"
import productDetailReducer from "./modules/DetailSlice"

export default configureStore({
    reducer: {
        sellingProducts: sellingProductsReducer,
        productDetail: productDetailReducer,
    }
})