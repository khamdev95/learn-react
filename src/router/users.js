import { redirect } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid'


export async function addAction({ request, params }) {
  const currentUsers = JSON.parse(localStorage.getItem('users')) || []
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  updates['id'] = uuidv4()
  currentUsers.push(updates);
  localStorage.setItem('users', JSON.stringify(currentUsers))
  return redirect('/')
}

export async function detailLoader({params}) {
  const currentUsers = JSON.parse(localStorage.getItem('users')) || []
  const user = currentUsers.find((item) => item.id == params.userId)
  return {user}
}

export async function detailAction({params}) {
  return redirect(`/user/${params.userId}/edit`)
}

export async function editLoader({params}) {
  const currentUsers = JSON.parse(localStorage.getItem('users')) || []
  const user = currentUsers.find((item) => item.id == params.userId)
  return {user}
}

export async function editAction({request, params}) {
  const currentUsers = JSON.parse(localStorage.getItem('users')) || []
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  currentUsers.forEach((item, index) => {
    if(item.id == params.userId) {
      item = {...item, ...updates}
      currentUsers[index] = item
    }
  })
  localStorage.setItem('users', JSON.stringify(currentUsers))
  return redirect('/')
}