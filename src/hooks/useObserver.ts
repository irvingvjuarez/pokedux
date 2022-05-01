const config = {
  rootMargin: "0px",
}

class Observer {
  protected constructor(
    protected addPokemons: unknown
  ){}

  static instance: IntersectionObserver
  static RequestApi: string
  
  static init(){
    if(!Observer.instance){
      Observer.instance = new IntersectionObserver(entries => {
        const visor = entries[0]
        if(visor.isIntersecting) console.log(Observer.RequestApi)
      }, config)
    }

    return Observer.instance
  }
}

const useObserver = (addPokemons: unknown, RequestApi: string) => {
  Observer.RequestApi = RequestApi
  return Observer.init()
}

export { useObserver }