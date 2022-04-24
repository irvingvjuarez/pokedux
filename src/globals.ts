export const LIMIT = 12;
export const API =  "https://pokeapi.co/api/v2/pokemon?limit=:LIMIT&offset=:OFFSET"
  .replace(":LIMIT", String(LIMIT))