import { Form, useNavigate } from "react-router-dom";


function CreateUser() {
  const navigate = useNavigate()
  const handleClickBack = () => {
    navigate('/')
  }
  return (
    <>
      <h1>Create User</h1>
      <Form method="post">
        <p>
          <span>Name:</span>
          <input type="text" name="name" />
        </p>
        <p>
          <span>Age:</span>
          <input type="text" name="age" />
        </p>
        <p>
          <span>Home:</span>
          <input type="text" name="home" />
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
export default CreateUser;