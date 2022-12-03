import { serve } from "https://deno.land/std@0.167.0/http/server.ts"
import {
  getAllMoviesByGenre,
  getGenres,
  getMovieById,
  getMovies,
} from "./db.ts"
import { json, notFound } from "./utils.ts"

const routes = {
  movies: "/movies",
  genres: "/genres",
}

function handler(req: Request) {
  const { pathname } = new URL(req.url)

  // From "/", redirect to "/movies"
  if (pathname === "/") {
    return new Response(undefined, {
      status: 301,
      headers: {
        "access-control-allow-origin": "*",
        location: "/movies",
      },
    })
  }

  // All movies
  if (pathname === routes.movies) {
    const movies = getMovies()
    return json(movies)
  }

  // Single movie (by ID)
  if (pathname.includes("/movies/")) {
    const id = pathname.split("/")[2]
    const movie = getMovieById(Number(id))

    if (!movie) {
      return notFound("movie not found")
    }

    return json(movie)
  }

  // All genres
  if (pathname === routes.genres) {
    const genres = getGenres()
    return json(genres)
  }

  // All movies of genre
  if (pathname.includes("/genre/")) {
    const genre = pathname.split("/")[2]
    const movies = getAllMoviesByGenre(genre)
    return json(movies)
  }

  return new Response("invalid route", {
    status: 400,
    headers: {
      "access-control-allow-origin": "*",
    },
  })
}

serve(handler)
