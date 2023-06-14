import { createBrowserRouter } from "react-router-dom";
import Home from "../app/Home";
import AllTask from "../app/AllTask";
import AddTask from "../app/AddTask";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <AllTask />,
      },
      {
        path: "/add-task",
        element: <AddTask />,
      },
    ],
  },
]);

export default router;
