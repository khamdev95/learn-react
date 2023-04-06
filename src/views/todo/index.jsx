import { useReducer, useState } from "react";
import { Link } from "react-router-dom";
import { deleteJob } from "../../todo/actions";
import reducer, { initState } from "../../todo/reducer";

function Todo() {
  const [stt, dispatch] = useReducer(reducer, initState);
  const {jobs} = JSON.parse(localStorage.getItem('job')) || []
  console.log(jobs);
  return (
    <>
      <h1>List Todo</h1>
      <div>
        <ul>
          {jobs && jobs.map((job, index) => (
            <li key={index}>
              {job}
              <span
                style={{ paddingLeft: 10 }}
                onClick={() => dispatch(deleteJob(index))}
              >
                &times;
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div>
          <Link to='/create-todo' className="button">Add Todo</Link>
      </div>
    </>
  );
}

export default Todo;
