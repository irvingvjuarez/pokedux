const config = {
  rootMargin: "0px",
}

const callback: IntersectionObserverCallback = (entries, observer) => {
  const visor = entries[0]
  if(visor.isIntersecting){
    console.log("Is Intersecting!")
  }
}

export const observer = new IntersectionObserver(callback, config)