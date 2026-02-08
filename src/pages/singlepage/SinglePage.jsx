import React from 'react'
import "./SinglePage.scss";
import Slider from '../../components/slider/Slider';
import Map from '../../components/map/Map';
import {singlePostData, userData} from "../../lib/dummyData";

const SinglePage = () => {
  return (
    <div className='singlepage'>

      <div className="details">

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

      <div className="features">

        <div className="wrapper">

          <p className='title'>General</p>
          <div className="listVertical">

            <div className="feature">
              <img src="/pet.png" alt="" />
              <div className="featureText">
                <span>Pet Policy</span>
                <p>Pets Allowed</p>
              </div>
            </div>

            <div className="feature">
              <img src="/utility.png" alt="" />
              <div className="featureText">
                <span>Utilities</span>
                <p>Render is responsible</p>
              </div>
            </div>

            <div className="feature">
              <img src="/fee.png" alt="" />
              <div className="featureText">
                <span>Property Fees</span>
                <p>Must have 3x the rent in total household income</p>
              </div>
            </div>

          </div>

          <p className='title'>Room Sizes</p>
          <div className="sizes">
            <div className="size">
              <img src="/size.png" alt="" />
              <span>80 sqft</span>
            </div>

            <div className="size">
              <img src="/bed.png" alt="" />
              <span>2 Beds</span>
            </div>

            <div className="size">
              <img src="/bath.png" alt="" />
              <span>1 Bathroom</span>
            </div>
          </div>

          <p className='title'>Nearby Places</p>
          <div className="listhorizontal">
            <div className="feature">
              <img src="/school.png" alt="" />
              <div className="featureText">
                <span>School</span>
                <p>250m away</p>
              </div>
            </div>

            <div className="feature">
              <img src="/bus.png" alt="" />
              <div className="featureText">
                <span>Bus Stop</span>
                <p>100m away</p>
              </div>
            </div>

            <div className="feature">
              <img src="/restaurant.png" alt="" />
              <div className="featureText">
                <span>Restaurant</span>
                <p>200m way</p>
              </div>
            </div>
          </div>
            
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