import { createStore } from "redux";
import menuReducer from "./reducer/menuReducer";
const store =createStore(menuReducer)
export default store;