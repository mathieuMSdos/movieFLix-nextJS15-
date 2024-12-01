"use client";
// utilisation ici du server-action addFavorite

import { addFavorite } from "@/app/actions/favorites";
import { MovieAllSchema } from "@/lib/schema/moviesAll";
import { Heart } from "lucide-react";

// on défini le type pour movieData qui est un Objet dans un Objet car c'est une Props

type FavoriteButtonProps = {
  movieData: MovieAllSchema;
};

const FavoriteButton = ({ movieData }: FavoriteButtonProps) => {
  const handleclick = async () => {
    try {
      await addFavorite(movieData);
      console.log("add favorite OK !")
    } catch (error) {
      throw new Error(`Erreur lors de l'ajout aux favoris: ${error}`);
    }
  };
  return (
    <button className="" onClick={handleclick}>
      <Heart />
    </button>
  );
};

export default FavoriteButton;
