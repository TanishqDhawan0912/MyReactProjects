import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Index from "./components";
import "./index.css";
import { githubinfo } from "./components/github/github";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import About from "./components/about/about";
import Contact from "./components/contactus/contactus";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "",
//         element: <Index.Home />,
//       },
//       {
//         path: "about",
//         element: <Index.About />,
//       },
//       {
//         path: "contact",
//         element: <Index.Contact />,
//       },
//     ],
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Index.Home />}></Route>
      <Route path="about" element={<Index.About />}></Route>
      <Route path="contact" element={<Index.Contact />}></Route>
      <Route path="user/:userid" element={<Index.User />}></Route>
      <Route
        path="github"
        element={<Index.Github />}
        loader={githubinfo}
      ></Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
