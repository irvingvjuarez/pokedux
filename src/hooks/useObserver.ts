const config = {
  rootMargin: "0px",
}

const useObserver = (addPokemons: unknown) => {
  return new IntersectionObserver((entries, observer) => {
    const visor = entries[0]
    if(visor.isIntersecting) console.log("Is Intersecting!")
  }, config)
}

export { useObserver }