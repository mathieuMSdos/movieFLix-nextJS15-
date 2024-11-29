import { getMovieById } from "@/lib/api/Movies/getMovieById";
import Image from "next/image";
import { notFound } from "next/navigation";

// Ici on a une page qui utilise une route dynamique.
// on utilise les routes dynamique quand on doit afficher la même page mais avec de la data qui varie en fonction d'un élément dynamique (souvent c'est un id)
// exemple ici on va créé la page details pour un film mais on va pas la coder 10 000 fois. On la fait une fois et c'est juste les datas qui vont changer. L'élément dynamique ici c'est l'ID de chaque film qui nous permet de récupérer la bonne data pour chaque film.

// Typage de l'id qui se trouve dans params par défaut. le nom ici movieId doit être le même que dans la structure de dossier du projet [movieId]

type DetailMoviePageProps = {
  params: {
    movieId: string;
  };
};

// on récumpère l'ID dynamique
const page = async ({ params }: DetailMoviePageProps) => {
  console.log(params.movieId);

  //Vérifie si l'id a bien été trouvé
  if (!params.movieId) {
    notFound();
  }

  // fetch des détails du movie
  const dataMovieDetails = await getMovieById(params.movieId);

  // on destructure la réponse du fetch pour récupérer toute les prorpiétés
  // c'est juste plus lisible pour utiliser les data
  const {
    poster_path,
    genres,
    original_title,
    overview,
    release_date,
    vote_average,
  } = dataMovieDetails;


  return (
    <div className={" relative w-full h-screen text-slate-50 "}>
      <div className="absolute h-96 w-4/5 bg-black-50/20 backdrop-blur-md rounded-2xl border top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 grid grid-cols-2   gap-4 overflow-auto ">

      {/* poster image */}
        <div className="relative rounded-2xl">
          <Image
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={"poster of"}
            fill
            className="absolute object-cover rounded-tl-2xl rounded-bl-2xl  "
          />
        </div>
        {/* details movie container */}
        <div className="p-4 flex flex-col justify-start items-start gap-6">
          {/* Title section */}
          <div className="flex flex-col gap-1">
            <h2 className="font-bold text-lg">{original_title}</h2>
            {/* rating */}
            <div className="flex items-center gap-1 ">
            <svg className="h-4 w-4 fill-yellow-300 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
              <p className="text-md">{`${vote_average.toFixed(1)}/10`}</p>
            </div>

            <em className="text-sm">{`Release date: ${release_date}`}</em>
          </div>

          {/* genre section */}

          <div className="flex flex-wrap text-sm">
            {genres
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((genre, key) => (
                <div key={key} className="flex items-center wrap ">
                  <span className="text-2xl font-extrabold mr-1 ">
                    &middot;
                  </span>
                  <em className=""> {genre.name}</em>
                </div>
              ))}
          </div>
          <p>{overview}</p>
        </div>
      </div>

      {/* background image */}

      <div className={"relative w-full h-3/5 rounded-2xl"}>
        {/* overlay */}
        <div className=" absolute top-0 h-full w-full object-cover bg-gradient-to-t from-black/100 to-transparent z-10 "></div>

        <Image
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={"poster of"}
          fill
          className="absolute object-cover "
        />
      </div>
      {/* container */}
    </div>
  );
};

export default page;
