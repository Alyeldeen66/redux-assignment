import { createStore } from "redux";
import { tasksReducer } from "../Reducers/tasks";

const store = createStore(tasksReducer);

export default store;
