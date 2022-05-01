import { IInitialState } from "../types"
import { fetchItems } from "../utils/fetchItems"

const config = {
  rootMargin: "0px",
}

class Observer {
  static instance: IntersectionObserver
  static state: IInitialState
  
  static init(){
    if(!Observer.instance){
      Observer.instance = new IntersectionObserver((entries, observer) => {
        const visor = entries[0]
        if(visor.isIntersecting) fetchItems(Observer.state)
      }, config)
    }

    return Observer.instance
  }
}

const useObserver = (state: IInitialState) => {
  Observer.state = state
  return Observer.init()
}

export { useObserver }