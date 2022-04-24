import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home } from "../pages/Home";

import { API } from "../globals"

const App: React.FC = (): JSX.Element => {
  useEffect(() => {
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
      .then(results => console.log(results))
  })

  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export { App }
