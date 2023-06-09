import { Link, useOutletContext } from "react-router-dom";

function Todo() {
  console.log('Todo re-render');
  const [{todos}, dispatch] = useOutletContext();
  return (
    <>
      <h1>List Todo</h1>
      <table>
        <thead>
          <tr>
            <th>Todo</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {todos && todos.map((todo, index) => (
            <tr key={todo.id}>
              <td>{todo.todo}</td>
              <td>{todo.status ? 'Done' : 'Pending'}</td>
              <td>
                <Link to={`/todo/${todo.id}/edit`}>Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <ul>
          
        </ul>
      </div>
      <div>
          <Link to='/create-todo' className="button">Add Todo</Link>
      </div>
    </>
  );
}

export default Todo;
