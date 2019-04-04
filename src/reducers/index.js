import { combineReducers } from "redux";
import cards from "./cards";
import currentCard from "./currentCard";

export default combineReducers({
  cards,
  currentCard
});
