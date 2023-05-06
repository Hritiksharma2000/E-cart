import handlecart from "./handlecart"
import { combineReducers } from "@reduxjs/toolkit"

const rootReducers = combineReducers({
    cart: handlecart
})

export default rootReducers;