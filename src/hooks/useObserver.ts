const config = {
  rootMargin: "0px",
}

const useObserver = (addPokemons: unknown, RequestApi: string) => {
  return new IntersectionObserver((entries, observer) => {
    const visor = entries[0]
    if(visor.isIntersecting) console.log(RequestApi)
  }, config)
}

export { useObserver }