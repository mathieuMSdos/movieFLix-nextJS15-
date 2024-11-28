// Typage de l'id

import { notFound } from "next/navigation";

type DetailMoviePageProps = {
  params: {
    movieId: string
  }
}

const page = ({params}:DetailMoviePageProps) => {

  //Vérifie si l'id a bien été trouvé
  if(!params.movieId){
    notFound()
  }

  
  return (
    <div>
      <p>Page détaillé du film</p>
      <p>{params.movieId}</p>
    </div>
  );
};

export default page;