import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../views/ErrorPage";
import HomePage from "../views/HomePage";
import Todo from "../views/todo";
import CreateTodo from "../views/todo/CreateTodo";
import Users from "../views/users";
import CreateUser from "../views/users/CreateUser";
import { addAction, editLoader, editAction, detailLoader, detailAction } from "./users";
import EditUser from "../views/users/EditUser";
import ShowUser from "../views/users/ShowUser";
import EditTodo from "../views/todo/EditTodo";
import { editTodoLoader } from "./todos";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Users />,
        action: editLoader,
      },
      {
        path: "/user/create-user",
        element: <CreateUser />,
        action: addAction,
      },
      {
        path: "/user/:userId/edit",
        element: <EditUser />,
        loader: editLoader,
        action: editAction,
      },
      {
        path: "/user/:userId",
        element: <ShowUser/>,
        loader: detailLoader,
        action: detailAction
      },
      {
        path: '/todo',
        element: <Todo/>
      },
      {
        path: '/create-todo',
        element: <CreateTodo/>
      },
      {
        path: '/todo/:todoId/edit',
        element: <EditTodo/>,
        loader: editTodoLoader
      }
    ],
  },
]);

export default router;
