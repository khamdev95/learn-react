import { useState } from "react";
import { Link } from "react-router-dom";

function Users() {
  const [users, setUsers] = useState(() =>  {
    const users = JSON.parse(localStorage.getItem('users'))
    return users ?? [];
  })
  const handleDeleteUser = (id) => {
    const newUsers = users.filter(item => item.id != id)
    localStorage.setItem('users', JSON.stringify(newUsers))
    setUsers(newUsers)
  }
  return (
    <>
      <h1>List User</h1>
      <table>
        <thead>
          <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Home</th>
          <th>Action</th>
        </tr>
        </thead>
        <tbody>
        {
          users.length > 0 && users.map((item, index) =>
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.age}</td>
            <td>{item.home}</td>
            <td>
              <Link to={`user/${item.id}/edit`} style={{paddingRight: 10}}>
                Edit
              </Link>
              <Link to={`user/${item.id}`} style={{paddingRight: 10}}>
                Detail
              </Link>
              <Link onClick={() => handleDeleteUser(item.id)}>
                Delete
              </Link>
            </td>
          </tr>
          )
        }
        </tbody>
      </table>
      <ul>
        
      </ul>
      <div>
        <Link to='/user/create-user'>Add User</Link>
      </div>
    </>
  )
}

export default Users;