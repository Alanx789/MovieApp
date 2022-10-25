import { useEffect, useState } from "react"
import { getMovieById } from "../Helpers/getMovieByid";

export const useFetchMovieById = () => {

    const [movie, setMovie] = useState();
    const [isLoading, setIsLoading] = useState( true );

    const getMovie = async(movieId, language) => {

        const result = await getMovieById(movieId);
        setMovie(result);
        setIsLoading(false);

    }

    useEffect( () => {
        getMovie(movieId) 
    }, [] );

    return{
        movie,
        isLoading
    }

}