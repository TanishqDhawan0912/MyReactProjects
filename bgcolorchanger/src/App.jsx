import React, { useState } from "react";

function App() {
  const [color, setColor] = useState("#FAF9F6");

  return (
    <>
      <div
        className="h-screen w-full bg-slate-500 duration-500"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap w-full justify-center bottom-9 ">
          <div className="mx-20 bg-white h-12 rounded-lg flex justify-center flex-wrap gap-3 items-center p-2">
            <button
              onClick={() => setColor("red")}
              className="bg-red-600 font-semibold text-white px-4 py-1 uppercase rounded-lg"
            >
              red
            </button>
            <button
              onClick={() => setColor("#fbcb20")}
              className="bg-yellow-500 font-semibold text-white px-4 py-1 uppercase rounded-lg"
            >
              yellow
            </button>
            <button
              onClick={() => setColor("blue")}
              className="bg-blue-500 font-semibold text-white px-4 py-1 uppercase rounded-lg"
            >
              blue
            </button>
            <button
              onClick={() => setColor("orange")}
              className="bg-orange-500 font-semibold text-white px-4 py-1 uppercase rounded-lg"
            >
              orange
            </button>
            <button
              onClick={() => setColor("green")}
              className="bg-green-500 font-semibold text-white px-4 py-1 uppercase rounded-lg"
            >
              green
            </button>
            <button
              onClick={() => setColor("purple")}
              className="bg-purple-500 font-semibold text-white px-4 py-1 uppercase rounded-lg"
            >
              purple
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
