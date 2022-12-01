# Deno Movie API

A simple REST API that returns a bunch of movies. Written in Deno.

## Routes

- `/movies` All movies
- `/movie/:id` A single movie by ID
- `/genres` All genres
- `/genre/:genre` All movies of a genre

## Setup

To run the API locally, clone this repository, `cd` into the directory and run `deno run --allow-net --allow-read main.ts`.
