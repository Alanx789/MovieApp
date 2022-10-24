import React, {useState} from 'react'
import { MovieCard } from '../Components/MovieCard';
import { useFetchTrending } from '../Hooks/useFetchTrending'

export const Trending = () => {

  const [type, setType] = useState('')
  const [timeLapse, setTimeLapse] = useState('')

  const {movies} = useFetchTrending(type, timeLapse);

  return(
    <>
      <div className='select media'>
        <label>Choose a media type:</label>

        <select name="media type">
          <option value={type} onChange={ setType("all") } >All</option>
          <option value={type} onChange={ setType("movie") } >Movies</option>
          <option value={type} onChange={ setType("tv") } >TV</option>
        </select>

      </div>
      <div className='select timeLapse'>
        <label>Choose a time lapse:</label>

        <select name="time lapse">
          <option value={timeLapse} onChange={ setTimeLapse('day')  } >Day</option>
          <option value={timeLapse} onChange={ setTimeLapse('week') } >Week</option>
        </select>
      </div>
      <div className='container row row-cols-1 row-cols-md-3 g-3'>
        { movies.map( (movie) => {
          <MovieCard
            key = { movie.id }
            { ...movie }
          />
        })} 
      </div>
    </>
  )
}
