import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { imageUrl } from './Url';
import { useNavigate } from 'react-router-dom';
import { Movie_context } from '../App';

const Movies = ({movieurl,link_title}) => {
    // console.log(movieurl);
const {moviedetailed,setmoviedetailed,detailedId, setdetailedId}=useContext(Movie_context);
const navigate =useNavigate();
const getmovie_id = (id) =>{
     setdetailedId(id)
     navigate("/detailed");
}
const [movie, setmovie] = useState([]);
useEffect(() => {
      axios.get(movieurl)
      .then((response)=>setmovie(response.data.results))
      setmoviedetailed(movie)
    }, [movieurl,movie])
  // console.log(movie);
  // console.log(moviedetailed);
  return (
    <div className='row'>
        <h1 className='row text-center mt-2'>{link_title}</h1>
        <Row xs={1} md={2} lg={3} xl={4} className='g-3'>
    {movie.map((i)=>{
        return(
          <Col key={i.id}>
          <Card className='card' style={{ width: '18rem', height: '100%' }}  onClick={()=> getmovie_id(i.id)}>
          <Card.Img variant="top" className='card-img'
          style={{width:"100%",
                 height:"330px" ,
                 borderRadius:"15px", 
                 backgroundSize:"100% 100%",
                 backgroundRepeat:"no-repeat",
                 objectFit:"cover"
                 }} 
                 src= {imageUrl+i.poster_path} />
            <Card.Body>
            {/* <Card.Title >{i.title}</Card.Title> */}
            <Card.Text></Card.Text>
              <Button style={{alignItems:"center"}} variant="primary" className='button' >See Detailed</Button>
          </Card.Body>
        </Card>
        </Col>
      )})}
    </Row>
    </div>
  )
}
export default Movies;
  