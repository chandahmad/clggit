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
  return (
    <div>
      <ICard
        roll="2345"
        name="Chand"
        branch="AIML"
        image={image}
      />

    </div>
  )
}

export default ICardGallery