import { IInitialState, } from "../types"

export const fetchItems = (initialState: IInitialState) => {
  const { state:{api}, addPokemons } = initialState
  let newApi: string

  if(api){
    fetch(api)
      .then(res => res.json())
      .then(data => {
        const requests = data.results.map(
          (result: {url: string}) => fetch(result.url)
        )
        newApi = data.next
        return Promise.all(requests)
      })
      .then(promises => {
        const solvedPromises = promises.map(promise => promise.json())
        return Promise.all(solvedPromises)
      })
      .then(results => {
        addPokemons(results, newApi)
      })
  }
}
