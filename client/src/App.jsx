import HomePage from "../pages/HomePage/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ListPage from "../pages/ListPage/ListPage";
import SingePage from "../pages/SingePage/SingePage";
import Layout from "../pages/layout/Layout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/list",
          element: <ListPage />,
        },
        {
          path: "/:id",
          element: <SingePage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
