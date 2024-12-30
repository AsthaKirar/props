import React, { useState } from 'react'
// import card from './components/card'

const App = () => {
  const [value,setValue] = useState(1)
  const [multipledValue,setmultipledValue]=useState(1)
  const multipledbyfive = () =>{

    setmultipledValue(value*5)
    setValue(value+1)
  }
  return (
<>
  <h1 className='bg-black text-white p-4 px-2 py-3 w-60  justify-center'>Main value {value}</h1>
  <button onClick={multipledbyfive} className='px-2 py-3 bg-blue-500 rounded-md'>click to multipled by 5</button>
  <h2>multipled value {multipledValue}</h2>


    </>
  )
}

export default App