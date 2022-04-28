import { API } from "../globals"

const useFetchPokemon = async (pokemonName: string) => {
  const pokemon = await fetch(API + "/" + pokemonName)
    .then(res => res.json())
    
  return pokemon
}

export { useFetchPokemon }