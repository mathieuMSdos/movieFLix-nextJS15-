import { getMoviesAll } from "@/lib/api/Movies/getMoviesAll";
import { getMovieSearchResults } from "@/lib/api/Movies/getMovieSearchResults";
import MovieCard from "@/src/components/MovieCard";
import MovieGrid from "@/src/components/MovieGrid";
import SearchBar from "@/src/components/SearchBar/SearchBar";

// notre composant search bar push un paramètre dans l'url quand on lance une recherche
// on peux récupérer ce paramètre dans notre composant
// c'est comme ça qu'on type une searchParam

export default async function Home({
  searchParams,
}: {
  searchParams: { search?: string };
}) {
  // On fetch soit : les films tendances soit la recherche  de l'utilisateur si searchParams.search n'est pas vide

  let data;

  if (searchParams.search && searchParams.search !== "") {
    data = await getMovieSearchResults(searchParams.search, 1);
  } else {
    data = await getMoviesAll();
  }

  return (
    <div className="flex flex-col items-center gap-10">
      <SearchBar />

      <MovieGrid>
        
        {data.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            overview={movie.overview}
            poster_path={movie.poster_path}
            release_date={movie.release_date}
            title={movie.title}
            vote_average={movie.vote_average}
            vote_count={movie.vote_count}
          />
        ))}
      </MovieGrid>
    </div>
  );
}
