import HomePage from "../pages/HomePage/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ListPage from "../pages/ListPage/ListPage";
import SingePage from "../pages/SingePage/SingePage";
import { Layout, RequireAuth } from "../pages/layout/Layout";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import ProfileUpdatePage from "../pages/ProfileUpdatePage/ProfileUpdatePage";
import NewPostPage from "../pages/NewPostPage/NewPostPage";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import {
  profilePageLoader,
  singlePageLoader,
  listPageLoader,
} from "./lib/loaders";

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
          loader: listPageLoader,
        },
        {
          path: "/:id",
          element: <SingePage />,
          loader: singlePageLoader,
        },
        {
          path: "/profile",
          element: <ProfilePage />,
          loader: profilePageLoader,
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
    {
      path: "/",
      element: <RequireAuth />,
      children: [
        {
          path: "/profile",
          element: <ProfilePage />,
        },
        {
          path: "/profile/update",
          element: <ProfileUpdatePage />,
        },
        {
          path: "/add",
          element: <NewPostPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
