import React from "react";

function TextBox({ text }) {
  return (
    <div className="mt-2  mx-7">
      <div className="bg-white relative inline-block top-[10px] left-4 px-1 font-bold capitalize">
        {text}
      </div>
      <div className="w-[350px] border-2 border-black  rounded-sm  ">
        <input type="text" className="w-[347px] h-[31px] pl-2" />
      </div>
    </div>
  );
}

export default TextBox;
