import reducer, { initState } from "../../todo/reducer";
import { addJob, setJob } from "../../todo/actions";
import { useReducer } from "react";

function CreateTodo() {
  const [{job}, dispatch] = useReducer(reducer, initState);
  const handleSubmit = (e) => {
    dispatch(addJob(job));
  };
  return (
    <>
      <h1>Create Todo</h1>
      <label>Input Job: </label>
      <input
        value={job}
        onChange={(e) => {
          dispatch(setJob(e.target.value));
        }}
      ></input>
      <div>
        <button className="button" onClick={handleSubmit}>Add Job</button>
      </div>
    </>
  );
}
export default CreateTodo;
