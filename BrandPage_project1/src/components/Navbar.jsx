import React from "react";

import NavLinks from "./NavLinks";

function Navbar() {
  return (
    <div className="flex justify-between mx-10 my-7 items-center">
      <div className="nike-logo ">
        <img src="src\assets\nikelogo.png" alt="" srcset="" className="h-10" />
      </div>
      <NavLinks />
      <div className="loginbtn bg-red-600 px-4 flex justify-center items-center h-8 text-white capitalize">
        login
      </div>
    </div>
  );
}

export default Navbar;
