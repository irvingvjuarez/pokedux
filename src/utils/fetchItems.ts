import { API } from "../globals"
import { IInitialState } from "../types"

export const fetchItems = (initialState: IInitialState) => {
  const { state, increaseOffset, addPokemons } = initialState

  fetch(API.replace(":offset", String(state.offset)))
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
      increaseOffset()
      addPokemons(results)
    })
}
