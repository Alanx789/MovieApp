import config from "../Config/config";

export const getMovieById = async (movieId, language = 'es-MX') => {

      const {ApiKey, Endpoint} = config;

      /* De donde vamos a traer los datos (URL) */
      const url = `${Endpoint}/movie/${movieId}?api_key=${ApiKey}&language=${language}`;

      //Promesa: 
      const resp = await fetch( url );  //Get URL

      //Espera a que se resuelva el json de 'resp'
      const result = await resp.json();

      return result;
      
}
