import { movieSchemaArray } from "../../schema/moviesAll";
import { GET_ALL_MOVIES_URL } from "./api-end-points";

export const getMoviesAll = async () => {
  try {
    const res = await fetch(
      GET_ALL_MOVIES_URL,
      {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
        },
        next: { revalidate: 50 }, //!!!!!! important pour pas refetch sans arrêt. Ca met la reponse dans le cache de nextjs pour de la data qui change peu c'est parfait.
      }
    );

    // si res.ok est false alors affiche moi l'erreur
    if (!res.ok) {
      throw new Error(`Error : ${res.status}`); //permet de stopper la fonction si y'a une erreur
    }

    // console.log("fetch movie = ok !");

    const data = await res.json();

    // console.log("popual movie : ", data.results)

    const validatedData = movieSchemaArray.parse(data.results);
    

    return validatedData;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
