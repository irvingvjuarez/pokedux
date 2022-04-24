import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home } from "../pages/Home";

import { fetchItems } from "../utils/fetchItems"

const App: React.FC = (): JSX.Element => {
  useEffect( () => fetchItems() )

  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export { App }
