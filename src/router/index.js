import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../views/ErrorPage";
import HomePage from "../views/HomePage";
import Todo from "../views/todo";
import CreateTodo from "../views/todo/CreateTodo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Todo />,
      },
      {
        path: '/create-todo',
        element: <CreateTodo/>
      }
    ],
  },
]);

export default router;
