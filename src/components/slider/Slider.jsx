import React, { useState } from 'react'
import "./Slider.scss";

const Slider = ({images}) => {
  const [imgIndex, setImgIndex] = useState(null);

  const changeSlide = (direction) => {
    if (direction === "left") {
      setImgIndex((prev) =>
        prev === 0 ? images.length - 1 : prev - 1
      );
    } else {
      setImgIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }
  };


  return (
    <div className='slider'>

      {imgIndex !== null && (
     
        <div className="fullslider">
          <div className="arrow">
            <img 
            src="/arrow.png" 
            alt=""
            onClick={() => changeSlide("left")}/>
          </div>

          <div className="imgCont">
            <img 
            src={images[imgIndex]} 
            alt=""/>
          </div>

          <div className="arrow">
            <img 
            src="/arrow.png" 
            className='rightarr' 
            alt=""
            onClick={() => changeSlide("right")}/>
          </div>

          <div className="close"
            onClick={() => (setImgIndex(null))}
          >
            X
          </div>

        </div>
         
      )}

      <div className="bigimg">
        <img src={images[0]} alt="" onClick={() => (setImgIndex(0))}/>
      </div>
      <div className="smallimg">
        {images.slice(1).map((image, index) => (
          <img 
          src={image} 
          alt="" 
          key={index} 
          onClick={() => (setImgIndex(index + 1))}/>
        ))}
      </div>
    </div>
  )
}

export default Slider