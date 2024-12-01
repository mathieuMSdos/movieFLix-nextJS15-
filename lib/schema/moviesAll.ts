import { z } from "zod";

// Grâçe à zod on va nettoyer les data qu'on envoie à notre app. On vire tous les fils qui n'ont pas de opster_path car ce sont souvent des anomalie de la BDD pas intéressant pour l'utilisateur final

export const movieSchema = z.object({
  id: z.number(),
  title: z.string(),
  release_date: z.string(),
  overview: z.string(),
  poster_path: z.string(),
  vote_average: z.number(),
  vote_count: z.number().optional(),
})

export const movieSchemaArray = z.array(movieSchema)




export type MovieAllSchema = z.infer<typeof movieSchema >



