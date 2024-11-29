import { movieSchemaArray } from "@/lib/schema/moviesAll";

export const getMovieSearchResults = async (
  search: string,
  pageNumber: number
) => {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=en-US&page=${pageNumber.toString()}`,
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

    // FILTRAGE :  on filtre les données reçu pour retirer tous le films qui n'ont pas d'image : poster_path
    // on vire tous le sposter_path null en demande que les true, et les différent de ""

    const filteredResults = data.results.filter(
      (movie) => movie.poster_path && movie.poster_path !== ""
    );

    // console.log("search résults : ", filteredResults);

    // on vérifie et type notre data via zod :
    const validatedData = movieSchemaArray.parse(filteredResults);

    return validatedData;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
