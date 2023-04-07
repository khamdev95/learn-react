

export async function editTodoLoader({params}) {
    const todos = JSON.parse(localStorage.getItem('todos')) || []
    console.log('router' , todos);
    const todo = todos.find((item) => item.id == params.todoId)
    return {todo}
}