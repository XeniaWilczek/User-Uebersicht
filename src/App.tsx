import "./App.scss";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Overview from "./routes/Overview/Overview";
import Create from "./routes/Create/Create";
import Edit from "./routes/Edit/Edit";
import Root from "./routes/Root/Root";
import ErrorPage from "./routes/Root/ErrorPage/ErrorPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        { index: true, element: <Overview></Overview> },
        {
          path: "Create",
          element: <Create></Create>,
        },
        { path: "Edit", element: <Edit></Edit> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
