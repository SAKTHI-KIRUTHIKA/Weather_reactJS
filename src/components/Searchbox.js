import React, { useState, useEffect } from 'react';
import '../styles/SearchBox.css'
import Mytimer from './Mytimer';
import Images from './Images';

function Searchbox() {
  const [city, setCity] = useState('');
  const [data, setData] = useState(null);



  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = (event) => {
    
    event.preventDefault();

      if(city!== null && city !== '')
          {
        fetch(`http://api.weatherapi.com/v1/current.json?key=d91d12d0c4fb4581a34150330231603&q=${city}`)
        .then(response => response.json())
        .then(data => setData(data))

        .catch(error => console.error(error));
      }
      else{
        alert("enter valid city name")
      }
    
  };



  useEffect(() => {
    fetch(`http://api.weatherapi.com/v1/current.json?key=d91d12d0c4fb4581a34150330231603&q=New York`)
      .then(response => response.json())
      .then(data => setData(data))
    
      .catch(error => console.error(error));
  },[] );

  if (!data) return <p className='loader'>Loading...</p>;

  

  return (
    <div className='wrapper'>
    <div className='weathercontainer'>
    <div className='headingcontainer'>
    <h1> {data.location.name}<br></br> {data.location.country}</h1>
    </div>
    
    <div className='subcontainer'>
   <Images data = {data}/>
    <h1 className='condition-name'>{data.current.condition.text}</h1>
   
    <form onSubmit={handleSubmit}>
    <input type="text" value={city} onChange={handleInputChange} className = 'search-box' placeholder='Enter city name'/>
   <button type="submit" className='search-btn'><img src='https://cdn-icons-png.flaticon.com/512/5636/5636698.png' width='20px' height ='20px'/></button>
    </form>
    </div>
    <div>
    </div>
      
      <div className='weather-report'>
      <p>Temperature: {data.current.temp_f}°F</p>
      
      <p>Wind Speed: {data.current.wind_mph} mph</p>
      <p>Humidity: {data.current.humidity}</p>

      </div>
      
    </div>
    <Mytimer/>
    </div>
  );
}

export default Searchbox;
