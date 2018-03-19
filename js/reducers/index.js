import { combineReducers } from "redux";
import drawer from "./drawer";
import user from "./user";
import list from "./list";
import auth from "./auth";

export default combineReducers({
  drawer,
    user,
    list,
    auth,
});
