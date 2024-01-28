// import logo from './logo.svg';
import './App.css';
import Header from './Movieapp/Header';
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { comedyMovies, latestMovies, popularMovies } from './Movieapp/Url';
import Movies from './Movieapp/Movies';
import Banner from './Movieapp/Banner';
import Detailed from './Movieapp/Detailed';
import { createContext, useState } from 'react';

const Movie_context=createContext();

function App() {
  const [moviedetailed, setmoviedetailed] = useState([])
  const [detailedId, setdetailedId] = useState("")
  const [hideandShow, sethideandShow] = useState(true);
  
  return (
    <div>
      <Movie_context.Provider value={{moviedetailed,setmoviedetailed,detailedId, setdetailedId}}>
      <BrowserRouter> 
      {hideandShow ? (
        <>
      <Header />
       <Banner movieUrl={comedyMovies}/>
       </>
       ):null}
     
      <Routes>
        <Route path='/latest' element={<Movies movieurl={latestMovies} link_title="Latest Movies"/>}/>
        <Route path='/comedy' element={<Movies movieurl={comedyMovies} link_title="Comedy Movies"/>}/>
        <Route path='/popular' element={<Movies movieurl={popularMovies} link_title="Popular Movies"/>}/>
        <Route path='/detailed' element={<Detailed sethideandShow={sethideandShow}/>}/>
      </Routes>
      </BrowserRouter>
      </Movie_context.Provider>
    </div>
  );
}


export default App;
export {Movie_context};