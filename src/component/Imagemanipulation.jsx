
// import React, { useState } from "react";
// import photos from "../assets/photos.jpg";

// function Imagemanipulation() {
//     const [height, setHeight] = useState(200);

//     function setheight() {
//     setHeight(height + 10);
// }
//     }
    

//   return (
//     <div>
//         <h2 style={{color:'red', backgroundColor:'black'}}>Imagemanipulation</h2>
//         <div style={{border:'2px solid red', height:'400px', width:'400px', marginLeft:'300px'}}>
//         <img src={photos} height={height} width={200}></img>
//         </div>


//         <div>
//             <button onClick={setheight}>Enhance Height </button>


//         </div>
        
        
//         </div>
//   )


// export default Imagemanipulation


import React from 'react'
import { useState } from 'react';
import photos from '../assets/photos.jpg';
function Imagemanipulation() {

    const [photosHeight, setPhotosHeight] = useState(200)
    const [photosWidth, setPhotosWidth] = useState(200)
    const [photosAngle, setPhotosAngle] = useState(30)
    const [boxMarginLeft, setBoxMarginLeft] = useState(200)

    function setHeight() {
        setPhotosHeight(photosHeight + 10)
    }

    function setWidth() {
        setPhotosWidth(photosWidth + 10)
    }

    function setAngle() {
        setPhotosAngle(photosAngle + 30)
    }

    function moveLeft() {
        setBoxMarginLeft(boxMarginLeft - 50)
    }

    function moveRight() {
        setBoxMarginLeft(boxMarginLeft + 50)
    }
    return (
        <div>
            <h2 style = {{color: 'red', backgroundColor: 'black'}}>Imagemanipulation</h2>
            <div style = {{border: '2px solid red', height: '400px', width: '400px', marginLeft: `${boxMarginLeft}px`}}>
            <img src = {photos} height = {photosHeight} width ={photosWidth} style={{transform: `rotate(${photosAngle}deg)`}}></img>
            </div>
            <div>
                <button onClick={setHeight}>enhanceHeight</button>
                <button onClick={setWidth}>enhanceWidth</button>
                <button onClick={setAngle}>rotate</button>
                <button onClick={moveLeft}>Move Left</button>
                <button onClick={moveRight}>Move Right</button>
            </div>

        </div>

    )
}
export default Imagemanipulation