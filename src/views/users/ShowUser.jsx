import { Form, Link, useLoaderData, useNavigate } from "react-router-dom"


function ShowUser() {
  const {user} = useLoaderData()
  const navigate = useNavigate()
  const handleClickBack = () => {
    navigate('/')
  }
  return (
    <>
      <Form action="edit">
        <h1>User Detail</h1>
        <h1>Name: {user.name}</h1>
        <h1>Age: {user.age}</h1>
        <h1>Home: {user.home}</h1>
        <div>
          <button type="submit">
            Edit
          </button>
          <button onClick={handleClickBack}>
            Back
          </button>
        </div>
      </Form>
    </>
  )
}
export default ShowUser