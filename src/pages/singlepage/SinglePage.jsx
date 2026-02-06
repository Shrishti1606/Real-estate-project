import React from 'react'
import "./SinglePage.scss";
import Slider from '../../components/slider/Slider';
import Map from '../../components/map/Map';
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
          <p className='title'>General</p>
          <div className="listVertical"></div>
          <p className='title'>Sizes</p>
          <div className="sizes"></div>
          <p className='title'>Nearby Places</p>
          <div className="listHorizontal"></div>
          <p className='title'>Location</p>
          <div className="mapCont">
            <Map items={[singlePostData]}/>
          </div>
          <div className="buttons">
            <button>
              <img src="/chat.png" alt=""/>
              Send a Message
            </button>
            <button>
              <img src="/save.png" alt=""/>
              Save the place
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default SinglePage