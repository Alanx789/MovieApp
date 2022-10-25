import React from 'react'
import { useParams } from 'react-router-dom'
import { MovieCard } from '../Components/MovieCard'
import { useFetchMovieById } from '../Hooks/useFetchMovieById'

export const Movie = () => {

    const { movieId } = useParams()
    const { movie, isLoading } = useFetchMovieById(movieId)

    return (
        <div className='text-center'>
            <MovieCard
                {...movie}
            />
        </div>
    )
}
