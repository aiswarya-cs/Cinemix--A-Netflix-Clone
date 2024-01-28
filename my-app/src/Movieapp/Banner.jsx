import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {  imageUrl } from './Url'

const Banner = ({movieUrl}) => {
    const [comedy, setcomedy] = useState([])
    useEffect(() => {
      axios.get(movieUrl).then((response)=>setcomedy(response.data.results))
    }, [])
  // console.log(comedy); 
   const randomIndex = Math.floor(Math.random() * comedy.length);

  const backgroundStyles = {
    backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(${imageUrl}${comedy[randomIndex ]?.poster_path})`,
                      minHeight: '50vh',
                      backgroundSize:'100% 100%', 
                      objectFit:'cover',
                      
  };
  return (
    <div className='banner text-center' style={backgroundStyles}>
            <div className='banner_h1'>
                  <h2 className='leftside' >{comedy[randomIndex]?.original_name}</h2>
                  <h6 className='left1side' >{comedy[randomIndex]?.overview}</h6>
            </div>
    </div>
  )
}

export default Banner;