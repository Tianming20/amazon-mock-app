import {configureStore} from "@reduxjs/toolkit"
import SellingProducts from "./modules/SellingProducts"

export default configureStore({
    reducer: {
        SellingProducts
    }
})