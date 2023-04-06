import { ADD_TODO, ADD_TODOS } from "./contants";

const addTodo = (payload) => ({
  type: ADD_TODO,
  payload,
});

const addTodos = (payload) => ({
    type: ADD_TODOS,
    payload,
  });

export { addTodo, addTodos };
