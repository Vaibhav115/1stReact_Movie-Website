import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import MovieCard from './MovieCard';
import './styles.css'


function App() {
  const [allMovies, setAllMovies] = useState([])
  const [searchedMovie, setSearchedMovies] = useState(' ')
  const [searchMovieList, setSearchMovieList] = useState([])

  useEffect(()=>{
    axios.get(' https://www.omdbapi.com/?apikey=45f0782a&s=war')
    .then(res => setAllMovies(res.data.Search))
    .catch(err =>console.log(err))
  })

  useEffect(()=>{
    if(searchedMovie.length >=3){
      axios.get(`https://www.omdbapi.com/?apikey=45f0782a&s=${searchedMovie}`)
      .then(res =>setSearchMovieList(res.data.Search))
      .catch(err =>console.log(err))
    }
  },[searchedMovie])
  return (
    <div> 
      <div className='searchContainer'>
        <input type='search' placeholder='Search for Movie Title....' className='searchBox' onChange={(e) =>setSearchedMovies(e.target.value)}/>
      </div>
      {
        searchedMovie.length < 3 && <p className='error'>Enter atleast 3 characters</p>
      }
      <div className='movieWrapper'>
        {
          searchMovieList && searchMovieList.length !==0 && searchedMovie !==''?
          searchMovieList.map((movie,idx) => <MovieCard movie={movie} idx={idx}/> )
           :
          allMovies.map((movie,idx) => <MovieCard movie={movie} idx={idx}/> )
        }

      </div>
    </div>
  );
}

export default App;
