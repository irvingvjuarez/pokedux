import { IPageSection, IPokemon } from "../../types";

export const doesMatch = (route: string, section: IPageSection) => {
  const { path, detail } = section
  if(route === path || route.includes(detail)) return true
  return false
}

export const getMatch = (route: string, section: IPageSection, pokemons: IPokemon[]) => {
  const { detail } = section

  /*
    Here there is a regex to look for the following patter:
    One letter followed by an slash and then more letters or numbers.

    Example: j/hello or t/34

    This is to find the ID of the respective detail
  */

  const matches = route.match(/[a-z]{1,1}\/([a-z]+|\d+)/)
  
  if(matches && route.includes(detail)){
    const match = matches[0].split("/")[1]
    const el = pokemons.find(pokemon => pokemon.name === match || pokemon.id === Number(match))
    return el?.name
  }
  return ""
}