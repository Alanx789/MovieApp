import { useEffect, useState } from "react"
import { getTrending } from "../Helpers/getTrending";

export const useFetchTrending = ( {media='', time=''} ) => {

    const [movies, setMovies] = useState( [] );
    const [isLoading, setIsLoading] = useState( true );

    const getTrendingMovies = async(media_type, time_window) =>  {

        const results = await getTrending(media_type, time_window);
        setMovies(results); 
        setIsLoading(false);

    }

    useEffect( () => { getTrendingMovies(media, time) }, [] );

    return{
        movies,
        isLoading
    }

}