import { API } from "../globals"

export const fetchItems = () => {
  fetch(API)
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
      // console.log(results)
      console.log("Fetch already done")
    })
}
