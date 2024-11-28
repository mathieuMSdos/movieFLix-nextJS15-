import { getMoviesAll } from "@/lib/api/Movies/getMoviesAll";
import MovieCard from "@/src/components/MovieCard";
import MovieGrid from "@/src/components/MovieGrid";

export default async function Home() {

  // fetch des données movies
  const data = await getMoviesAll();

  return (
    <div>
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
