import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  // const [data, setData] = useState([]);
  const [username, setUsername] = useState("HiteshChoudhary");

  // useEffect(() => {
  //   fetch(`https://api.github.com/users/${username}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data);
  //     });
  // }, [username]);

  return (
    <div>
      <div className="w-full flex justify-center items-center mt-5">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          disabled={true}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border-none border-black text-black mx-2"
        />
      </div>
      <h1 className="text-center m-5 p-10 bg-slate-700 text-5xl text-whit flex items-center flex-col">
        <div>Github Followers: {data.followers}</div>
        <div className="m-4 ">
          <img className="h-[300px] rounded-lg" src={data.avatar_url} alt="" />
        </div>
      </h1>
    </div>
  );
}

export default Github;

export const githubinfo = async () => {
  const res = await fetch(`https://api.github.com/users/HiteshChoudhary`);
  return res.json();
};
