import { useState } from "react";
import { addTodos } from "../../store/actions";
import { useNavigate, useOutletContext } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid'

function CreateTodo() {
  console.log('Create-Todo re-render');
  const [{}, dispatch] = useOutletContext();
  const [todo, setTodo] = useState('')
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    dispatch(addTodos({
      id: uuidv4(),
      todo,
      status: false
    }));
    navigate('/todo')
  };
  return (
    <>
      <h1>Create Todo</h1>
      <label>Input Job: </label>
      <input
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value)
        }}
      ></input>
      <div>
        <button className="button" onClick={handleSubmit}>Add Job</button>
      </div>
    </>
  );
}
export default CreateTodo;
