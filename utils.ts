// deno-lint-ignore no-explicit-any
export function json(payload: any) {
  return new Response(JSON.stringify(payload), {
    status: 200,
    headers: {
      "content-type": "application/json",
      "cache-control": "max-age=604800",
    },
  })
}

export function notFound(msg?: string) {
  return new Response(msg, {
    status: 404,
  })
}
