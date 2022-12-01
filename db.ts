import { getJSON } from "./utils.ts"

type Movie = {
  id: number
  title: string
  year: string
  runtime: string
  genres: string[]
  director: string
  actors: string
  plot: string
  posterUrl: string
}

const data = (await getJSON("./data.json")) as Movie[]

export function getMovies() {
  return data
}

export function getGenres() {
  const allGenres = data.map((movie) => movie.genres).flat()
  const uniqueGenres = [...new Set(allGenres)]
  return uniqueGenres
}

export function getMovieById(id: number) {
  const [movie] = data.filter((movie) => movie.id === id)
  return movie
}

export function getAllMoviesByGenre(genre: string) {
  const movies = data.filter((movie) => movie.genres.includes(genre))
  return movies
}
