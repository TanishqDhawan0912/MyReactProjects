import React from "react";
import { useParams } from "react-router-dom";

function user() {
  const { userid } = useParams();

  return (
    <div>
      <h1 className="text-center m-5 p-10 bg-slate-700 text-5xl text-white">
        User : {userid}{" "}
      </h1>
    </div>
  );
}

export default user;
