import { combineReducers } from "redux";
import movielist from "./movielist";
import addfavo from "../Redux/Reducer"

export default combineReducers({
    movielist,
    addfavo
})