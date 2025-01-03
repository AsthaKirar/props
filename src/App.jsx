// 

import {useState,useCallback } from 'react';

const App = () => {
  const [length,setlength] = useState(8)
  const [numberAllowed,setnumberAllowed]= useState(false);
  const [charAllowed,setAllowed]=useState(false)
const [password,setpassword]=useState("")
const passwordGenerator = useCallback(()=>{
  let pass = ""
  let str = 
  "ABCDEFGHIJKLMNOPQRSTUVWXYZSDHHDSDUIWHCGIUG"
  if(numberAllowed) str +="0123457789"
  if (charAllowed) str +="@22$&=-[]{}*^" 
  for(let i=1; i<= array.length; i++){
    let char = Math.floor(Math.random()= str.length+1)
    pass = str.charAt(char)
  }
} ,[length, numberAllowed, charAllowed, setpassword])


  return (
<>
<div className='w-ful max-w-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-500'>
  <div className='className="flex shadow rounded-md overflow-hidden mb-4'>
    <input type="text"
    value={password}
    className='outline-none w-full py-1 px-3' 
    placeholder='password'
    readOnly/>
  </div>
</div>
</>
  )
}

export default App