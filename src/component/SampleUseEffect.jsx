

import React,{useState,useEffect} from 'react'

function SampleUseEffect(){
    const[counter,setCounter]=useState(0);
    useEffect(()=>{
       // console.log("Hey....using useEffect")
       console.log("Counter="+counter)
    },[counter])
   
function setCount(){
    setCounter(counter+5);
}

  return (
    <div>
        <h2 style={({color:"brown"})}>SampleUseEffect</h2>
        <h1>Counter Value={counter}</h1>
        <button onClick={setCount}>Counter</button>
    </div>
  )
}

export default SampleUseEffect
