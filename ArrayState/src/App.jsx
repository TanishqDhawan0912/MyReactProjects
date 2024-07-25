import { useState } from "react";

function App() {
  const initialvalue = [1, 2, 3];

  const [arr, setarr] = useState(initialvalue);
  const [value,setvalue]=useState("")

  function removefirstelement() {
    setarr((currentarr) => {
      return currentarr.slice(1);
    });
  }

  function removelastelement() {
    setarr((currentarr) => {
      return currentarr.slice(0, -1);
    });
  }

  function randomnumber() {
    return Math.floor(Math.random() * 10);
  }

  function removeallodds() {
    setarr((currentarr) => {
      return currentarr.filter((item) => item % 2 === 0);
    });
  }

  function addtostart(value) {
    setarr((currentarr) => {
      if (typeof(value) === 'number') {
        value= randomnumber();
      }
      return [value, ...currentarr];
    });
  }

  function addtoend() {
    setarr((currentarr) => {
      let letter = randomnumber();
      return [...currentarr, letter];
    });
  }

  function clear() {
    setarr([]);
  }

  function reset() {
    setarr(initialvalue);
  }

  function updateall1to9() {
    setarr((currentarr) => {
      return currentarr.map((item) => {
        if (item === 1) {
          return 9;
        }
        return item;
      });
    });
  }

  function addvaluetoindex(value, index) {
    setarr((currentarr) => {
      return [...currentarr.slice(0, index), value, ...currentarr.slice(index)];
    });
  }

  return (
    <div>
      <button onClick={() => removefirstelement()}>Remove First Element</button>
      <br />
      <button onClick={removelastelement}>Remove Last Element</button>
      <br />
      <button onClick={removeallodds}>remove all odds</button>
      <br />
      <button onClick={() => addtostart(1)}>Add number to start</button>
      <br />
      <button onClick={() => addtoend("z")}>Add number to end</button>
      <br />
      <button onClick={clear}>Clear</button>
      <br />
      <button onClick={reset}>Reset</button>
      <br />
      <button onClick={updateall1to9}>Update all 1 to 9</button>
      <h1>{arr.join(", ")}</h1>
      <input type="text" value={value} onChange={e => setvalue(e.target.value)} />
      <br />
      <button onClick={() => addtostart(value)}>Add value to array</button>
      <br />
      <button onClick={()=>addvaluetoindex(value,1)}>Add value to index</button>
    </div>
  );
}
export default App;
