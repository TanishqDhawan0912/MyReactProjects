import React, { useState, useEffect } from "react";

function DiceNumber({ num, isSelected, handleNumberClick }) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (isSelected) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [isSelected]);

  const handleClick = () => {
    handleNumberClick(num);
  };

  return (
    <button
      onClick={handleClick}
      className="border border-black px-5 py-2 font-bold mx-3"
      style={{
        backgroundColor: isSelected ? "black" : "white",
        color: isSelected ? "white" : "black",
        backgroundColor: active ? "black" : "white",
        color: active ? "white" : "black",
      }}
    >
      {num}
    </button>
  );
}

export default DiceNumber;
