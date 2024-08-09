import React from "react";

function ActionBtn({ title, bgcolor, textcolor, linkvisit }) {
  return (
    <button
      onClick={linkvisit}
      className={`${bgcolor} ${textcolor} px-20 py-2 flex items-center capitalize font-semibold rounded-md text-[20px] mt-4 `}
    >
      {title}
    </button>
  );
}

export default ActionBtn;
