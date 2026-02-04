import React from 'react'
import "./SinglePage.scss";
import Slider from '../../components/slider/Slider';
import {singlePostData, userData} from "../../lib/dummyData";

const SinglePage = () => {
  return (
    <div className='singlepage'>

      <div className="left">

        <div className="wrapper">
          <Slider images={singlePostData.images}/>

          <div className="info">

            <div className="top">
              <div className="postInfo">
                <h1>{singlePostData.title}</h1>
                <div className="address">
                  <img src="/pin.png" alt="" />
                  <span>{singlePostData.address}</span>
                </div>
                <div className="price">$ {singlePostData.price}</div>
              </div>
              <div className="userInfo">
                <img src={userData.img} alt="" />
                <span>{userData.name}</span>
              </div>
            </div>

            <div className="bottom">
              {singlePostData.description}
            </div>
          </div>

        </div>

      </div>

      <div className="right">
        <div className="wrapper">

        </div>
      </div>

    </div>
  )
}

export default SinglePage