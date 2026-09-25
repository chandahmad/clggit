// function ICard() {
//   return (
//     <div className="card">

//       <h1>ABES ENGINEERING COLLEGE</h1>

//       <img
//         src="https://randomuser.me/api/portraits/men/32.jpg"
//         alt="Student"
//       />

//       <h2>CHAND AHMAD</h2>

//       <p><b>Course:</b> B.Tech CSE</p>

//       <p><b>Roll No:</b> 2025CSE1001</p>

//       <p><b>Branch:</b> Computer Science</p>

//       <p><b>Session:</b> 2025-2028</p>

//     </div>
//   )
// }

// export default ICard
import React from 'react'
import image from '../assets/photo.jpg'
function ICard({data}) {
  
  return (
    
    <div style={{border:'10px solid red',width:'200px',height:'400px',margin:'auto',textAlign:'center',gap:'5px'}}>
      <h2 style={{backgroundColor:'blue',color:'white'}}>ABES ENGINEERING COLLEGE</h2>
     <img src={data.image} height="100" width="100" borderRadius="50%" alt="Student" />
      <h3>Roll No. = {data.roll}</h3>
      <h3>Name = {data.name}</h3>
      <h3>Branch = {data.branch}</h3>

      {/* <img 
        src={image}
        alt="Student Photo"
        style={{
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          objectFit: 'cover'
        }}/> */}
      {/* <h5 style={{color:'green'}}>Welcome to react using vite</h5> */}
      {/* <h5 style={{color:'white'}}>Name={name}</h5>
      <h5 style={{color:'white'}}>Roll No.={a}</h5>
      <h5 style={{color:'white'}}>Branch=AIML</h5>
      <h5 style={{color:'white'}}>Section=C</h5> */}
      {/* <h5 style={{color:'white', margin:'10px 10px'}}>branch= AIML</h5> */}
      {/* <h2 style={{color:'yellow'}}>Name={name}</h2>
      <h2 style={{color:'red'}}>Roll No.={a}</h2>
      <h2 style={{color:'orange'}}>Course=B.Tech CSE</h2> */}
      </div>
  )
}
export default ICard

