import { IInitialState } from "../types"
import { API } from "../globals"

export const fetchResults = (initialState: IInitialState) => {
  const { state:{count, results}, updateResults } = initialState

  fetch(API + "?limit=" + count)
    .then(res => res.json())
    .then(data => updateResults(data.results.splice(results.length)))
}