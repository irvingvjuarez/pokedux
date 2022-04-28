import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home } from "../pages/Home";
import { PokemonDetail } from "../pages/PokemonDetail";

import { useInitialState } from "../hooks/useInitialState"
import { AppContext } from "../context/AppContext"
import { Layout } from "../containers/Layout"

const App: React.FC = (): JSX.Element => {
  const initialState = useInitialState()

  return(
    <BrowserRouter>
      <AppContext.Provider value={initialState}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pokemon/:name" element={<PokemonDetail />} />
          </Routes>
        </Layout>
      </AppContext.Provider>
    </BrowserRouter>
  )
}

export { App }
