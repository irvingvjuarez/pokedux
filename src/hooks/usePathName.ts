const regex = new RegExp(/[a-z]+$/i)

const usePathName = (location: any) => {
  let pokemonName = null
  const matches = location.pathname.match(regex) as RegExpMatchArray

  if(matches[0]){
    pokemonName = matches[0]
  }

  return pokemonName
}

export { usePathName }