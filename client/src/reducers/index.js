import { combineReducers } from "redux";
import dish from "./dishReducer";
import ingredient from "./ingredientReducer";
import balance from "./balanceReducer";

export default combineReducers({
  dish: dish,
  ingredient: ingredient,
  balance: balance
});
