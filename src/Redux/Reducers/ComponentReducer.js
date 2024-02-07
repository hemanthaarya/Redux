import { REMOVE_SELECTED_PRODUCTS, SELECTED_PRODUCTS,SET_PRODUCTS } from "../ActionContents/Contents"

const initial_state={
    products:[],
}

export const Componentreducer=(state=initial_state,action)=>{
    switch(action.type){
        case SET_PRODUCTS:
            return {...state,products:action.payload};
        default:
            return state;
    }
}

export const SelectedProductReducer=(state={},action)=>{
    switch(action.type){
        case SELECTED_PRODUCTS:
            return {...state,...action.payload}
        case REMOVE_SELECTED_PRODUCTS:
            return {}
        default:return state
    }
}
