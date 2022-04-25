import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home } from "../pages/Home";
import { useInitialState } from "../hooks/useInitialState"
import { AppContext } from "../context/AppContext"
import { useEffect } from 'react';
import { fetchItems } from '../utils/fetchItems';

const App: React.FC = (): JSX.Element => {
  const initialState = useInitialState()

  useEffect(() => {
    fetchItems(initialState)
  }, [])

  return(
    <BrowserRouter>
      <AppContext.Provider value={initialState}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </AppContext.Provider>
    </BrowserRouter>
  )
}

export { App }
