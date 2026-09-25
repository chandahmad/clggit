import React, { useState } from 'react'
function StateHandling() {
    const[counter,setCounter] = useState(20);
    const[red,setRed]=useState(0);
    const[green,setGreen]=useState(0);  
    const[blue,setBlue]=useState(0);

    function increament(){
        setCounter(counter+10);
    }
    function changeBGColor(){
        setRed(Math.random()*255);
        setGreen(Math.random()*255);
        setBlue(Math.random()*255);
    }

  return (
    <div style={{border:'2px solid red',height:'300px',width:'300px',backgroundColor:`rgb(${red},${green},${blue})`,textAlign:'center',margin:'auto',fontSize:'50px'}}>
      <h2 style={{backgroundColor:'brown',color:'darkBlue'}}>counter App</h2>
      <h2 style={{backgroundColor:'black',color:'white'}}>counter={counter}</h2>
      <button style={{backgroundColor:'red',color:'white',borderRadius:'30px',margin:'10px',background:'linear-gradient(to right, #d4ed1b, #ff4b2b)'}} onClick={increament}>IncrementCounter</button>
      <button style={{backgroundColor:'blue',color:'white',borderRadius:'50px',margin:'10px'}} onClick={()=>setCounter(counter-10)}>DecrementCounter</button>
      <button onClick={changeBGColor}>ChangeBGolor</button>
    </div> 
  )
}

export default StateHandling