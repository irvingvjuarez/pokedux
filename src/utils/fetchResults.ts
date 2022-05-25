import { IInitialState } from "../types"
import { API } from "../globals"

export const fetchResults = (initialState: IInitialState) => {
  const { state:{count, results}, updateResults } = initialState

  fetch(API + "?limit=" + count)
    .then(res => res.json())
    .then(data => {
      const fetchedResults = data.results.splice(results.length)
      updateResults(fetchedResults)
    })
}