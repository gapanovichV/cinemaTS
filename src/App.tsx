import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Home } from "./pages/Home";
import { FullMovie } from "./pages/FullMovie";
import { Layout } from "./components/Layout";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { useAuth } from "./hooks/use-auth";
import { HomeNotAuth } from "./pages/HomeNotAuth";
import { useAppDispatch } from "./redux/store";
import { setUser } from "./redux/user/slice";

const App = () => {
  const { isAuth } = useAuth();
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    const storage: string | null = localStorage.getItem("user");
    if (storage !== null) {
      const user = JSON.parse(storage);
      dispatch(
        dispatch(setUser({ email: user.email, token: "55", id: user.uid }))
      );
    }
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <div>Page not found</div>,
      children: [
        {
          path: "/",
          element: isAuth ? <Home /> : <HomeNotAuth />,
        },
        {
          path: "/post/:id",
          element: <FullMovie />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
