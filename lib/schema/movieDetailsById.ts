import { z } from "zod";

// schema pour 1 genre
const movieGenreSchema = z.object({
  name: z.string(),
});

// schema pour la réponse api getMovieById

export const movieDetailsByIdSchema = z.object({
  poster_path: z.string().nullable(), //important au cas où un film n'a pas de poster
  budget: z.number(),
  genres: z.array(movieGenreSchema),
  original_title: z.string(),
  overview: z.string(),
  release_date: z.string(),
  vote_average: z.number(),
  vote_count: z.number(),
});

// export du typage 
export  type MovieGenre = z.infer<typeof movieGenreSchema>;

export  type MovieDetailsById = z.infer<typeof movieDetailsByIdSchema>;
