import {changeTheApi,changeSortMethod} from "./reducer";

import {combineReducers} from "redux";

const rootReducer = combineReducers({
    changeTheApi:changeTheApi,
    changeSortMethod:changeSortMethod
})

export default rootReducer;