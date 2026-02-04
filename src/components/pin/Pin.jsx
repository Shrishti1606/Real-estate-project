import React from 'react'
import { Marker, Popup } from 'react-leaflet'
import { Link } from 'react-router-dom'
import './Pin.scss';

const Pin = ({item}) => {
  return (
    <Marker position={[item.latitude, item.longitude]}>
        <Popup>
           <div className="popupCont">
                <img src={item.img} alt="" />
                <div className="textCont">
                    <Link to={`/${item.id}`}>{item.title}</Link>
                    <span>{item.bedroom}</span>
                    <b>$ {item.price}</b>
                </div>
           </div>
        </Popup>
    </Marker>
  )
}

export default Pin