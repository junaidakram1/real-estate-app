import HomePage from "../pages/HomePage/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ListPage from "../pages/ListPage/ListPage";
import SingePage from "../pages/SingePage/SingePage";
import Layout from "../pages/layout/Layout";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";

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
        {
          path: "/profile",
          element: <ProfilePage />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/login",
          element: <Login />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
