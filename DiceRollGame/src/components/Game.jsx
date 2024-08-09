import React, { useEffect, useState } from "react";
import DiceNumber from "./DiceNumber";
import Dice from "./Dice";
import ActionBtn from "./ActionBtn";

function Game() {
  const [totalscore, setTotalScore] = useState(0);
  const [userSelectedNumber, setUserSelectedNumber] = useState(null);
  const [isshown, setIsshown] = useState("show details");
  const [visible, setVisible] = useState("hidden");
  // const [lastSelectedNumber, setLastSelectedNumber] = useState(null);

  const handleNumberClick = (num) => {
    // setLastSelectedNumber(userSelectedNumber);
    setUserSelectedNumber(num);
  };

  const reset = () => {
    // setTotalScore(0);
    // setUserSelectedNumber(null);
    location.reload();
  };

  const showrules = () => {
    if (visible == "hidden") {
      setVisible("");
    } else {
      setVisible("hidden");
    }

    if (isshown == "show details") {
      setIsshown("hide details");
    } else {
      setIsshown("show details");
    }
  };

  return (
    <>
      <div className="flex flex-col ">
        <div className="flex justify-between">
          <div className="leftside w-[50%] flex justify-start items-start ">
            <div className="inline-block ml-14 mt-9">
              <div className="flex flex-col justify-center items-center">
                <div className="text-[70px] font-semibold m-0 p-0">
                  {totalscore}
                </div>
                <div className="text-[20px] relative bottom-5 font-semibold">
                  Total Score
                </div>
              </div>
            </div>
          </div>
          <div className="rightside w-[50%]">
            <div className="flex flex-col justify-end items-end m-[70px]">
              <div className="text-3xl font-bold capitalize mb-4">
                select number
              </div>
              <div className="dice-numbers flex">
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <DiceNumber
                    key={num}
                    num={num}
                    isSelected={num === userSelectedNumber}
                    handleNumberClick={handleNumberClick}
                  />
                ))}
              </div>
              <div className="mt-2 capitalize">
                your select =
                <span className="font-bold">{userSelectedNumber}</span>
              </div>
              {/* <div className="mt-2 capitalize">
              last select =
              <span className="font-bold">{lastSelectedNumber}</span>
            </div> */}
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center ">
          <Dice
            isSelected={userSelectedNumber}
            totalscore={totalscore}
            setTotalScore={setTotalScore}
          />
          <ActionBtn
            title="reset game"
            bgcolor="bg-black"
            textcolor="text-white"
            linkvisit={reset}
          />
          <div className="flex flex-col justify-center items-center">
            <div className="block">
              <ActionBtn
                title={isshown}
                bgcolor="bg-black"
                textcolor="text-white"
                linkvisit={showrules}
              />
            </div>
            <div className={`mt-6 bg-pink-100 p-3 rounded-lg pb-9 ${visible}`}>
              <div className="text-3xl capitalize font-bold mb-3">
                How to play dice game
              </div>
              <div className="ml-5">
                <ul className="list-disc">
                  <li>Select any number .</li>
                  <li>
                    After click on number if selected number is equal to dice
                    number you will get same point as dice .
                  </li>
                  <li>
                    If you get wrong guess then 1 point will be dedcuted .
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Game;
