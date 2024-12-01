import Image from "next/image";
import Link from "next/link";
import { MovieAllSchema } from "../../lib/schema/moviesAll";
import FavoriteButton from "./FavoriteButton";

// on récupère le typage de nos props  directement depuis notre fichier schema ZOD

const MovieCard = ({
  id,
  overview,
  poster_path,
  release_date,
  title,
  vote_average,
}: MovieAllSchema) => {

// on prépare un objet avec toutes les data pour les passer à notre bouton favorite afin de pouvoir faire le post avec le server action
const movieData:MovieAllSchema = {
  id,
  overview,
  poster_path,
  release_date,
  title,
  vote_average,
}
  return (
    // card

    <div className="relative w-72 h-96 cursor-pointer overflow-hidden hover:border-2 transparent rounded-lg hover:border-white/70 transition-colors duration-200 shadow-lg hover:shadow-white/10 group/card">
      {/* FAvorite logo */}
      <div className=" absolute z-50 top-3 right-3">
        <FavoriteButton movieData={movieData} />
      </div>
      <Link href={`/movies/${id}`}>
        {/* background image */}
        <Image
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={`poster of ${title}`}
          fill
          className="object-cover transition-transform duration-500 ease-in-out group-hover/card:scale-105 "
        />
        {/* overlay */}
        <div className="absolute opacity-0 w-full  bg-black/80 backdrop-blur-sm text-slate-200 group-hover/card:opacity-100 transition-opacity duration-500">
          {/* contenu de la card */}
          <div className="flex justify-center p-2 ">
            <h2>{title}</h2>
          </div>
        </div>
        <div className=" absolute bottom-0 flex flex-col gap-4 text-sm p-4 bg-gradient-to-t from-black to-transparent opacity-0  bg-opacity-10 text-slate-200 group-hover/card:opacity-100 transition-opacity duration-500">
          <p>{`Release: ${release_date}`}</p>
          <p>{overview}</p>
          <p>{`Rank: ${vote_average.toFixed(1)}/10`}</p>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
