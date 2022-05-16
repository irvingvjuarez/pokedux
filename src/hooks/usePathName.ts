const regex = new RegExp(/pokemon\/([a-z]+|\d)/i)

const usePathName = (location: any) => {
  let pokemonName = null
  const matches = location.pathname.match(regex) as RegExpMatchArray

  if(matches[0]){
    pokemonName = matches[0].replace("pokemon/", "")
  }

  return pokemonName
}

export { usePathName }