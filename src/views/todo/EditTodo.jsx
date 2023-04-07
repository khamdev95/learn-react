import { useState } from "react";
import { useLoaderData } from "react-router-dom";

function EditTodo() {
  console.log('Edit-Todo re-render');
  const {todo} = useLoaderData()
  const [todoEdit, setTodoEdit] = useState(() => {
    return todo
  })
  console.log(todo);
  const handleChangeStatus = (e) => {
    setTodoEdit((pre) => {
      console.log(e.target.value);
      const newValue = {
        ...pre,
        status: e.target.value
      }
      console.log(newValue);
      return newValue
    })
  }
  return (
    <>
      <h1>This is Edit Todo</h1>
      <label>Input Job: </label>
      <input
        defaultValue={todoEdit.todo}
      ></input>
      <div>
        <label>Status: </label>
        <input type="radio" id="done" name="status" onChange={handleChangeStatus} value={true} checked={todoEdit.status} />
        <label htmlFor="done">Done</label>
        <input type="radio" id="pending" name="status" onChange={handleChangeStatus} value={false} checked={!todoEdit.status} />
        <label htmlFor="pending">Pending</label>
      </div>
      <div>
        <button>Save</button>
        <button>Cancel</button>
      </div>
    </>
  )
}
export default EditTodo;