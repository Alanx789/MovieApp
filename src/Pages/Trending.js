import React from 'react'
import { MovieCard } from '../Components/MovieCard';
import { useFetchTrending } from '../Hooks/useFetchTrending'

export const Trending = () => {

  const {movies} = useFetchTrending();

  return(
    <div className='container row row-cols-1 row-cols-md-3 g-3'>
      { movies.map( (movie) => {
        <MovieCard
          key = { movie.id }
          { ...movie }
        />
      })}
    </div>
  )
}
