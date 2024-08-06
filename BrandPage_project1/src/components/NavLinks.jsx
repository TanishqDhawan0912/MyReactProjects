import React from "react";
import { Link } from "react-router-dom";

function NavLinks() {
  return (
    <div className="navbarlinks flex justify-between w-[400px] uppercase font-bold">
      <Link to="/" className="home">
        home
      </Link>
      <div className="location">location</div>
      <div className="about">about</div>
      <Link to="/contact" className="home">
        contact us
      </Link>
    </div>
  );
}

export default NavLinks;
