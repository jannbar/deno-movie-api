export async function getJSON(filepath: string) {
  return JSON.parse(await Deno.readTextFile(filepath))
}

// deno-lint-ignore no-explicit-any
export function json(payload: any) {
  return Response.json(payload, {
    status: 200,
    headers: {
      "content-type": "application/json",
      "cache-control": "max-age=120",
    },
  })
}

export function notFound(msg?: string) {
  return new Response(msg, {
    status: 404,
  })
}
