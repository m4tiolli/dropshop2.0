import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./screens/Home/Home";
import Login from "./screens/Login/Login";
import Cadastro from "./screens/Cadastro/Cadastro";

function Routes() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/criar-conta",
      element: <Cadastro />,
    },
  ]);
  return <RouterProvider router={router} />;
}
export default Routes;
