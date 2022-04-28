import { API } from "../globals"
import { IInitialState } from "../types"
import { observer } from "./observer"

export const fetchItems = (initialState: IInitialState, observed?: Element) => {
  const { state, addPokemons } = initialState

  // console.log(state.offset)

  fetch(API.replace(":OFFSET", String(state.offset)))
    .then(res => res.json())
    .then(data => {
      const requests = data.results.map(
        (result: {url: string}) => fetch(result.url)
      )
      return Promise.all(requests)
    })
    .then(promises => {
      const solvedPromises = promises.map(promise => promise.json())
      return Promise.all(solvedPromises)
    })
    .then(results => {
      if(observed) observer.observe(observed)
      addPokemons(results)
    })
}
