# Deno Movie API

A simple REST API that returns a bunch of movies. Built with Deno.

## Routes

- `/movies` All movies
- `/movie/:id` A single movie by ID
- `/genres` All genres
- `/genre/:genre` All movies of a genre

## Setup

To run the API on your machine, clone this repository, `cd` into the directory and run `deno task start`.
For running the server in dev mode (with watcher enabled), run `deno task dev`.
