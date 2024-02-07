import { SELECTED_PRODUCTS,SET_PRODUCTS,REMOVE_SELECTED_PRODUCTS } from "../ActionContents/Contents"

export const SetProducts=(products)=>{
    return {
        type:SET_PRODUCTS,
        payload:products
    }
}

export const SelectedProducts=(product)=>{
    return {
        type:SELECTED_PRODUCTS,
        payload:product
    }
}
export const removeSelectedProducts=()=>{
    return {
        type:REMOVE_SELECTED_PRODUCTS
    }
}