import { combineReducers } from "redux";

// combine index
// this is places where we using for define state's name.
const reducers = combineReducers({
  user: require("./UserRedux").reducer,

});

export default reducers;
