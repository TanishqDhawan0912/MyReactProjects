import React from "react";
import ActionBtn from "./ActionBtn";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex p-[160px]">
      <div className="leftside w-[50%]">
        <img src="src\assets\dices1.png" alt="" srcset="" />
      </div>
      <div className="rightside w-[50%] flex flex-col justify-center">
        <div className="text-[100px] uppercase font-bold flex justify-end">
          dice game
        </div>
        <div className="flex justify-end mt-3">
          <ActionBtn
            title="start game"
            bgcolor="bg-black"
            textcolor="text-white"
            linkvisit={() => navigate("/game")}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
