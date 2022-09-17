import React, { useState } from 'react'
import './styles.css'


function MovieCard(props) {
     const [showTitle, setShowTitle] =  useState()
    const {movie, idx} = props
  return (
    <div className='moviesCard'
    onMouseEnter={()=> setShowTitle(idx)}
    onMouseLeave={()=> setShowTitle(null)}
    >
        <img src={movie.Poster} alt="poster" className='image'/>
        {showTitle === idx && <div className='movieTitle'>
            <p>{movie.Title}</p>
        </div>}

    </div>
  )
}

export default MovieCard
