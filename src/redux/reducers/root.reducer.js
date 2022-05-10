import { combineReducers } from "redux"
import { productsReducer } from "./products.reducer"
import { uiReducer } from "./ui.reducer"

const rootReducer = combineReducers({
    confMerch: productsReducer,
    ui: uiReducer
})

export { rootReducer }