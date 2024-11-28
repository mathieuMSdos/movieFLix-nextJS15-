import {movieDetailsByIdSchema } from '../../schema/movieDetailsById';

export const getMovieById = async (movieId:string) => {
  try {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}`, {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
      },
      next: { revalidate: 50 }, //!!!!!! important pour pas refetch sans arrêt. Ca met la reponse dans le cache de nextjs pour de la data qui change peu c'est parfait.
    })

    if(!res.ok) {
      throw new Error(`Error: ${res.status}`)
    }

    console.log("fetch details ok !")

    // on converti la réponse au format json
    const data = await res.json()

    //On coompare/contrôle avec notre schema zod

    const verifiedData = movieDetailsByIdSchema.parse(data)

    // on retourne la data
    return verifiedData
    
  } catch (error) {
    console.log(error);
    throw error
    
  }
};
