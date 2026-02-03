import SearchBar from '../../components/searchbar/SearchBar'
import './HomePage.scss'
import React from 'react'

const HomePage = () => {
  return (
    <div className='homePage'>

    <div className="textContainer">
      <div className="wrapper">
      <h1 className='title'>
        Find Real Estate & Get Your Dream Place
      </h1>
      <p>
        Homes designed for living and spaces made for memories. TulipEstate helps you find your perfect home with comfort and style in mind. Explore properties that match your needs, your taste, and your lifestyle, because finding the right home should feel easy and exciting.
      </p>

      <SearchBar />

      <div className="boxes">
        <div className="box">
          <h1>16+</h1>
          <h2>Years of Experience</h2>
        </div>
        <div className="box">
          <h1>200</h1>
          <h2>Awards Gained</h2>
        </div>
        <div className="box">
          <h1>1500+</h1>
          <h2>Property Ready</h2>
        </div>
      </div>

      </div>
    </div>

    <div className="imgContainer">
      <img src="/bg.png" alt="bg"/>
    </div> 

    </div>
  )
}

export default HomePage