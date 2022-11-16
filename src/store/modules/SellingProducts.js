import {createSlice} from "@reduxjs/toolkit"
import {sellingList} from "../../data"

const getRandomNum = () => {
    return Math.floor(Math.random() * 95 + 6);
};

const sellingProducts = createSlice({
    name: "sellingProducts",
    initialState: {
        sellingProducts: sellingList,
    },
    reducers:{
        addProducts(state, action){
            state.sellingProducts.push({...action.payload.newProduct, id: getRandomNum()})
        },   
        removeProducts(state, action){
            const data = state.sellingProducts;
            const {id} = action.payload;
            const index = data.findIndex(item=> id === item.id);
            data.splice(index, 1)
        }
    }
})

export default sellingProducts.reducer

export const {addProducts, removeProducts} = sellingProducts.actions;