import { ADD_TODO, ADD_TODOS } from "./contants";
const initState = {
  todos: [],
  todo: null,
};

function reducer(state, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todo: action.payload,
      };
    case ADD_TODOS:
      localStorage.setItem('todos', JSON.stringify([...state.todos, action.payload]))
      return {
        ...state,
        todos: [...state.todos, action.payload],
        todo: ''
      };
    default:
      throw new Error("Invalid action.");
  }
}
export { initState };
export default reducer;
