const regex = new RegExp(/(pokemon|pokedux)\/([a-z]+|\d)/i)

const usePathName = (location: any) => {
  let pokemonName = null
  const matches = location.pathname.match(regex) as RegExpMatchArray

  if(matches[0]){
    pokemonName = matches[0].replace("pokemon/", "").replace("pokedux/", "")
  }

  return pokemonName
}

export { usePathName }