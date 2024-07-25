import React from "react";
import Index from "./components";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Index.Header />
      <Outlet />
      <Index.Footer />
    </>
  );
}

export default App;
