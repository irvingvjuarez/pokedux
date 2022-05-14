import { IInitialState, IResult, } from "../types"

export const fetchItems = (initialState: IInitialState) => {
  const { state:{api, count}, addPokemons } = initialState
  let newApi: string
  let newResults: IResult[]

  if(api){
    fetch(api)
      .then(res => res.json())
      .then(data => {
        const requests = data.results.map(
          (result: {url: string}) => fetch(result.url)
        )
        newApi = data.next
        newResults = data.results
        return Promise.all(requests)
      })
      .then(promises => {
        const solvedPromises = promises.map(promise => promise.json())
        return Promise.all(solvedPromises)
      })
      .then(results => {
        addPokemons(results, newApi, newResults)
      })
  }
}
