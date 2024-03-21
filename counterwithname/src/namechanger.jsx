import React,{useState} from "react"; 

export function Namechanger() {
    const [name, setname] = useState("");
    const [age, setage] = useState(0);

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
        <button onClick={()=>setage(age-1)}>-</button>
        <span>{age}</span>
        <button onClick={()=>setage(age+1)}>+</button>
      </div>
      <h1>this is {name} and my age is { age}</h1>
    </div>
    )
}