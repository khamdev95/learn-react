// import Gift from './components/Gift'
// import TwowayBinding from './components/TwowayBinding'
// import TodoList from './components/TodoList'
// import Content from './components/Content'
// import LeanrnUseReducer from './todo/index'
// import CompA from './context/index'
// import { useState } from "react";
import { useStore, actions } from "./store";
import { useRef } from "react";
import "./App.css";

function App() {
  const [state, dispatch] = useStore();
  const inputTodoRef = useRef()
  const handleSubmit = () => {
    dispatch(actions.addTodos(state.todo))
    dispatch(actions.addTodo(''))
    inputTodoRef.current.focus()
  }
  return (
    <div className="App" style={{ padding: 20 }}>
      <label>Input Job: </label>
      <input
        ref={inputTodoRef}
        value={state.todo}
        onChange={(e) => {
          dispatch(actions.addTodo(e.target.value));
        }}
      ></input>
      <button onClick={handleSubmit}>Add Job</button>
      <div>
        <ul>
          {state.todos.map((job, index) => (
            <li key={index}>
              {job}
              <span
                style={{ paddingLeft: 10 }}
                // onClick={() => dispatch(deleteJob(index))}
              >
                &times;
              </span>
            </li>
          )) || ""}
        </ul>
      </div>
    </div>
  );
}

export default App;
