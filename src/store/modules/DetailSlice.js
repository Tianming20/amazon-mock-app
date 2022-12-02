import {createSlice} from "@reduxjs/toolkit"

const productDetail = createSlice({
    name: "productDetail",
    initialState: {
        productDetail: {},
    },
    reducers:{
        changeProductDetail(state, action){
            state.productDetail = action.payload.detail;
        },   
    }
})

export default productDetail.reducer

export const {changeProductDetail} = productDetail.actions;