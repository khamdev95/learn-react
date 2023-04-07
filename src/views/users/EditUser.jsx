import { Form, useLoaderData, useNavigate } from "react-router-dom";

function EditUser() {
  const {user} = useLoaderData();
  const navigate = useNavigate()
  const handleClickBack = () => {
    navigate('/')
  }
  return (
    <>
      <h1>Edit User</h1>
      <Form method="post">
        <p>
          <span>Name:</span>
          <input disabled type="text" name="name" defaultValue={user.name} />
        </p>
        <p>
          <span>Age:</span>
          <input type="text" name="age" defaultValue={user.age}/>
        </p>
        <p>
          <span>Home:</span>
          <input type="text" name="home" defaultValue={user.home}/>
        </p>
        <p>
          <button type="submit">Save</button>
          <button onClick={handleClickBack}>
            Back
          </button>
        </p>
      </Form>
    </>
  )
}
export default EditUser;