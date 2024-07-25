import { useState, useEffect, useCallback, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numbAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordselect = useRef(null);

  const generatePassword = useCallback(() => {
    let char = "abcdefghijklmnopqrstuvwxyz";
    let numb = "0123456789";
    let specialChar = "!@#$%^&*()_+";
    let password = "";
    if (numbAllowed) char += numb;
    if (charAllowed) char += specialChar;
    for (let i = 0; i < length; i++) {
      password += char.charAt(Math.floor(Math.random() * char.length + 1));
    }
    setPassword(password);
  }, [length, numbAllowed, charAllowed, setPassword]);

  const copytoClipboard = useCallback(
    (e) => {
      passwordselect.current?.select();
      window.navigator.clipboard.writeText(password);
    },
    [password]
  );

  useEffect(() => {
    generatePassword();
  }, [length, numbAllowed, charAllowed, generatePassword]);

  return (
    <>
      <div className="h-screen  w-screen bg-black ">
        <div className="flex justify-center items-center p-20">
          <div className="bg-slate-600 flex p-3 flex-col justify-center rounded-lg w-[500px]">
            <div className="text-white font-bold text-3xl my-4 text-center">
              Password Generator
            </div>
            <div className="flex flex-row justify-center items-center">
              <input
                type="text"
                onChange={(e) => setPassword(e.target.value)}
                defaultValue={password}
                placeholder="password"
                className="w-full p-2 rounded"
                ref={passwordselect}
              />
              <button
                onClick={copytoClipboard}
                className="bg-blue-600 text-white p-2 flex justify-center items-center font-bold capitalize m-4 rounded-lg hover:bg-blue-700"
              >
                <span>copy</span>
              </button>
            </div>
            <div className="flex flex-row items-center justify-center">
              <input
                onChange={(e) => setLength(e.target.value)}
                type="range"
                min={5}
                max={20}
                defaultValue={length}
              />
              <label className="mx-4">length:{length}</label>
              <input
                onChange={() => setNumAllowed((prev) => !prev)}
                type="checkbox"
                className="mx-2"
              />
              <label>Numbers</label>
              <input
                onChange={() => setCharAllowed((prev) => !prev)}
                type="checkbox"
                className="mx-2"
              />
              <label>Special Characters</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
