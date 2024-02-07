import { combineReducers } from "redux";
import {Componentreducer, SelectedProductReducer} from './ComponentReducer'


const reducers=combineReducers({
    allproducts:Componentreducer,
    product:SelectedProductReducer
})
export default reducers