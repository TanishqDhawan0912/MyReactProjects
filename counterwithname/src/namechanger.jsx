import React, { useEffect , useState } from "react";

export function Namechanger() {
  const [name, setname] = useState("");
  const [age, setage] = useState(0);
  const [width, setwidth] = useState(window.innerWidth);
  const person = {name}

  // useEffect(() => {
  //   document.title = name;
  // }, [name]);

  // useEffect(() => {
  //   window.addEventListener("resize", () => {
  //     setwidth(window.innerWidth);
  //   });
  //  }, [width]);

  useEffect(() => {
    const handler = () => {
      console.log(name);
    };
    document.addEventListener("click", handler);
    console.log("inside effect")
    return () => {
      document.removeEventListener("click", handler);
      console.log("cleanup")
    };
  }, [name]);

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setname(e.target.value);
        }}
      />
      <div>
        <br />
        <button onClick={() => setage((currentage) => currentage - 1)}>
          -
        </button>
        <span>{age}</span>
        <button onClick={() => setage((currentage) => currentage + 1)}>
          +
        </button>
      </div>
      <h1>
        this is {name} and my age is {age}
      </h1>
      {/* <h2>Window width is {width}</h2> */}
    </div>
  );
}
