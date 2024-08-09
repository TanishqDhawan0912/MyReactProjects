import React, { useState, useEffect } from "react";
import dice1 from "../assets/dice_1.png";
import dice2 from "../assets/dice_2.png";
import dice3 from "../assets/dice_3.png";
import dice4 from "../assets/dice_4.png";
import dice5 from "../assets/dice_5.png";
import dice6 from "../assets/dice_6.png";

function Dice({ isSelected, totalscore, setTotalScore }) {
  console.log("rendering dice");

  const [dice, setDice] = useState(1);
  

  useEffect(() => {
    if (isSelected === null) return;
    const foo = Math.floor(Math.random() * 6) + 1;
    setDice(foo);
    if (isSelected === foo) {
      console.log("dice", foo);
      setTotalScore(totalscore + foo);
    } else {
      console.log("not matched", totalscore);
      setTotalScore(totalscore - 1);
    }
  }, [isSelected]);

  // useEffect(() => {
  //   if (isSelected === dice) {
  //     console.log("dice", dice);
  //     setTotalScore(totalscore + dice);
  //   } else {
  //     console.log("not matched");
  //     setTotalScore(totalscore - 1);
  //   }
  // }, [dice]);

  const dicechange = {
    1: dice1,
    2: dice2,
    3: dice3,
    4: dice4,
    5: dice5,
    6: dice6,
  };

  return (
    <div className="dice">
      {
        <img
          src={dicechange[dice]}
          alt="dice"
          className="w-[230px] h-[230px]"
        />
      }
      {/* <button className='w-[150px] p-2 rounded-sm bg-black text-white'
        onClick={() => rollDice()}
      >
        Roll Dice
      </button> */}
    </div>
  );
}

export default Dice;
