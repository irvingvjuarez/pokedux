import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home } from "../pages/Home";
import { useInitialState } from "../hooks/useInitialState"
import { AppContext } from "../context/AppContext"
import { useEffect } from 'react';
import { fetchItems } from '../utils/fetchItems';
import { Layout } from "../containers/Layout"

const App: React.FC = (): JSX.Element => {
  const initialState = useInitialState()

  return(
    <BrowserRouter>
      <AppContext.Provider value={initialState}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Layout>
      </AppContext.Provider>
    </BrowserRouter>
  )
}

export { App }
