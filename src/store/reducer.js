import { ADD_TODO, ADD_TODOS } from "./contants";
const initState = {
  todos: [],
  todo: "",
};

function reducer(state, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todo: action.payload,
      };
    case ADD_TODOS:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    default:
      throw new Error("Invalid action.");
  }
}
export { initState };
export default reducer;
