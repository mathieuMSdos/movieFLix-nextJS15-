import { z } from "zod";

export const movieSchema = z.object({
  id: z.number(),
  title: z.string(),
  release_date: z.string(),
  overview: z.string(),
  poster_path: z.string(),
  vote_average: z.number(),
  vote_count: z.number(),
});

export const movieSchemaArray = z.array(movieSchema)



