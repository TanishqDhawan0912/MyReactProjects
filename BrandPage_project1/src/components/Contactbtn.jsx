import React from "react";

function Contactbtn({ text }) {
  return (
    <div className="bg-black px-7 py-2 uppercase text-white mr-5 rounded-md font-semibold text-[15px] flex justify-center items-center w-[200px]">
      {text}
    </div>
  );
}

export default Contactbtn;
