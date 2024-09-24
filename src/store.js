import { combineReducers, createStore } from "redux";
import questionReducer from "./features/question/questionSlice";
import optionReducer from "./features/setting/settingSlice";

const rootReducers = combineReducers({
  setting: optionReducer,
  question: questionReducer,
});

const store = createStore(rootReducers);

export default store;
