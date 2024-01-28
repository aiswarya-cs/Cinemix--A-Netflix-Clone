import React, { useEffect } from 'react';
import { useContext } from 'react';
import { Movie_context } from '../App';
import { imageUrl } from './Url';
import Rating from '@mui/material/Rating';
import PlayCircleOutline from '@mui/icons-material/PlayCircleOutline';

const Detailed = ({sethideandShow}) => {
  useEffect(() => {
    sethideandShow(false);
    return()=>{
      sethideandShow(true)
    }
  }, [sethideandShow])
  
  const { moviedetailed, detailedId } = useContext(Movie_context);
  console.log(moviedetailed);
  console.log(detailedId);

  const filteredMovie = moviedetailed.find((movie) => movie.id === detailedId);
  console.log(filteredMovie);

  return (
    <div className='detailed_bg container' style={{ background: `linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(${imageUrl + filteredMovie?.poster_path})`,maxWidth:"100%", backgroundRepeat: "no-repeat", backgroundSize: "100% 100%", objectFit:"cover" }}>
      {filteredMovie && (
        <div className='inner_division '>
          {/* <div className='col-md-6'> */}
          <div className='inner_div_1 '>
            <h1 className='text-center' style={{ textAlign: "center", fontFamily: "cursive" }}> {filteredMovie?.title}</h1>
            <p><b>Overview:</b>{filteredMovie?.overview}</p>
            <small>Origial Language: {filteredMovie?.original_language}</small>
            <br />
            <br />
            <Rating name="customized-10" defaultValue={filteredMovie?.vote_average} max={10} size='small' />
            <div className='button_watchnow '><button>Subscribe to Watch&nbsp;&nbsp;<PlayCircleOutline/></button></div>
          </div>
          {/* </div> */}
          {/* <div className='col-md-6'> */}
          <div className='inner_div_2'>
            <img src={imageUrl + filteredMovie?.poster_path} alt={filteredMovie?.title} style={{ width: '30%', height: '400px', objectFit: 'cover', marginLeft:"650px", marginTop:"-430px", backgroundSize:"100% 100%", backgroundRepeat:"no-repeat" }} />
          </div>
        {/* </div> */}
        </div>
      )}
    </div>
  );
};

export default Detailed;