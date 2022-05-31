import { IInitialState } from "../types"
import { fetchItems } from "../utils/fetchItems"

const config = {
  rootMargin: "200px",
}

class Observer {
  static instance: IntersectionObserver
  static state: IInitialState
  
  static init(){
    if(!Observer.instance){
      Observer.instance = new IntersectionObserver((entries, observer) => {
        const visor = entries[0]
        if(visor.isIntersecting && navigator.onLine){
          visor.target.classList.remove("hidden")
          fetchItems(Observer.state)
        }else{
          visor.target.classList.add("hidden")
        }
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