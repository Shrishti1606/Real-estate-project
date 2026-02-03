import React from 'react';
import './Filter.scss'

const Filter = () => {
  return (
    <div className='filter'>
        <h1>
            Search results for <b>London</b>
        </h1>
        <div className="top">
          <div className="item">
            <label htmlFor="City">Location</label>
            <input 
              type="text" 
              id="City" 
              name="City" 
              placeholder='City Location'
            />
          </div>
        </div>

        <div className="bottom">

            <div className="item">
            <label htmlFor="Type">Type</label>
            <select name="type" id="type">
              <option value="">any</option>
              <option value="buy">Buy</option>
              <option value="rent">Rent</option> 
            </select>
          </div>

          <div className="item">
            <label htmlFor="Property">Property</label>
            <select name="property" id="property">
              <option value="">any</option>
              <option value="apartment">Apartment</option>
              <option value="house">house</option> 
              <option value="condo">condo</option>
              <option value="land">land</option>
            </select>
          </div>

          <div className="item">
            <label htmlFor="minPrice">Min Price</label>
            <input 
              type="number" 
              id="minPrice" 
              name="minPrice" 
              placeholder='any'
            />
          </div>

          <div className="item">
            <label htmlFor="maxPrice">Max Price</label>
            <input 
              type="number" 
              id="maxPrice" 
              name="maxPrice" 
              placeholder='any'
            />
          </div>

          <div className="item">
            <label htmlFor="bedroom">Bedrooms</label>
            <input 
              type="number" 
              id="bedroom" 
              name="bedroom" 
              placeholder='any'
            />
          </div>

          <button>
            <img src="/search.png" alt="search" />
          </button>

        </div>
    </div>
  )
}

export default Filter