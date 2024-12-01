// server action
"use server";

import { MovieAllSchema, movieSchema } from "../../lib/schema/moviesAll";

// ------------- méthode ADD FAVORITE - POST -----------

export const addFavorite = async (movieData: MovieAllSchema) => {
  // ZOD - on contrôle le typage des datas
  const validatedData = movieSchema.parse(movieData);

  // ensuite on post
  try {
    const res = await fetch("http://localhost:3001/favorites", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...validatedData,
      }),
    });

    if (!res.ok) {
      throw new Error("Erreur lors de l'ajout du favori");
    }
    console.log("POST = OK !");
  } catch (error) {
    console.log(error);
  }
};
