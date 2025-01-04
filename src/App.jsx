// 




// import { use, useEffect } from "react";
// import { useState, useCallback } from "react";

// const App = () => {
//   const [length, setlength] = useState(8);
//   const [numberAllowed, setnumberAllowed] = useState(false);
//   const [charAllowed, setAllowed] = useState(false);
//   const [password, setpassword] = useState("");

//   const passwordGenerator = useCallback(() => {
//     let pass = "";
//     let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZSDHHDSDUIWHCGIUG";
//     if (numberAllowed) str += "0123457789";
//     if (charAllowed) str += "@22$&=-[]{}*^";
//     for (let i = 0; i < length; i++) {
//       let char = Math.floor(Math.random() * str.length);
//       pass += str.charAt(char);
//     }
//     const passwordRef = useRaf(null)
//     const passwordGenerator = useCallback(()=>{

//     },[length, numberAllowed,charAllowed, setPassword])

// useEffect(()=>{
//   passwordGenerator()
// },[length, numberAllowed, charAllowed,passwordGenerator])
//   return (
//     <>
//       <div className="w-ful max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800">
//         <h1 className="text-white text-center my-3 text-4xl">password generator</h1>
//         <div className="flex shadow rounded-lg overflow-hidden mb-4">
//           <input
//             type="text"
//             value={password}
//             className="outline-none w-full py-1 px-3"
//             placeholder="password"
//             readOnly
//             ref={passwordRef}
//           />
//         </div>
//         <button
        
//           onClick={copypasswordToClipboard}
//           className="bg-blue-600 text-white px-3 py-0.5 shrink-0 rounded"
//         >
//           copy
//         </button>

//         <div className="flex-text-5m gap-x-2">
//           <div className="flex items-center gap-x-1">
//             <input type="range"
//             min={6}
//             max={100}
//             value={length}
//             className="cursor pointer" 
//             onChange={(e)=>{setlength(e.target.value)}}/>
//             <label>Length:{length}</label>
//           </div>
//           <div className="flex items-center gap-x-1">
//             <input type="checkbox"
//             defaultChecked={numberAllowed}
//             id="numberInput"
//             onChange={()=>{
//               setnumberAllowed((prev)=>!prev);
//             }} />
//             <label htmlFor="number">Numbers</label>
            
//           </div>
//           <div className="flex items-center gap-x-1">
//             <input type="checkbox"
//             defaultChecked={charAllowed}
//             id="chracterInput"
//             onChange={()=>{
//               setnumberAllowed((prev)=>!prev);
//             }} />
//             <label htmlFor="characterInput">chracters</label>
            
//           </div>


//         </div>
//       </div>
      
//     </>
//   )};
// }

// export default App;



import React, { useState, useCallback, useEffect, useRef } from "react";

const App = () => {
  const [length, setlength] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charAllowed, setAllowed] = useState(false);
  const [password, setpassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZSDHHDSDUIWHCGIUG";
    if (numberAllowed) str += "0123457789";
    if (charAllowed) str += "@22$&=-[]{}*^";
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setpassword(pass);
  }, [length, numberAllowed, charAllowed]);

  const copypasswordToClipboard = () => {
    if (passwordRef.current) {
      passwordRef.current.select();
      document.execCommand("copy");
      alert("Password copied to clipboard!");
    }
  };

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <div className="w-ful max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800">
        <h1 className="text-white text-center my-3 text-4xl">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
        </div>
        <button
          onClick={copypasswordToClipboard}
          className="bg-blue-600 text-white px-3 py-0.5 shrink-0 rounded"
        >
          Copy
        </button>

        <div className="flex-text-5m gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setlength(Number(e.target.value));
              }}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setnumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                setAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
