// import React from 'react'
// import ICard from './ICard'
// import image from '../assets/photo.jpg'

// function ICardGallery(){
//     return(
//         <div>
//            < ICard pic roll= "2345" name= "chand" branch = "AIML" image={image} />
           
//         </div>
//     )
// }
import React from 'react'
import ICard from './ICard'
import image from '../assets/photo.jpg'

function ICardGallery() {
  const student =[ {
    roll: "2345",
    name: "Chand",
    branch: "AIML",
    image: "image"
  },
{
    roll: "2345",
    name: "Chand",
    branch: "AIML",
    image: "image"
  },
  {
    roll: "2345",
    name: "Chand",
    branch: "AIML",
    image: "image"
  },
  {
    roll: "2345",
    name: "Chand",
    branch: "AIML",
    image: "image"
  }

]
  
  return (
    <div  style={{
      display: "flex",
      flexDirection: "row",
      gap: "30px",
      justifyContent: "center"
    }}>
      {/* <ICard
        roll="2345"
        name="Chand"
        branch="AIML"
        image={image}
      /> */}
        {/* <ICard data ={student} />
        <ICard/> */}

      {student.map((ele)=>(
        <ICard data={ele} />
      ))
      }
    </div>
  )
}

export default ICardGallery