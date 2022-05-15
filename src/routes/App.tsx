import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home } from "../pages/Home";
import { PokemonDetail } from "../pages/PokemonDetail";
import { PokemonPhotos } from "../pages/PokemonPhotos";
import { Ability } from "../pages/Ability";
import { Layout } from "../containers/Layout"

import { useInitialState } from "../hooks/useInitialState"
import { AppContext } from "../context/AppContext"
import { IInitialState } from '../types';

const App: React.FC = (): JSX.Element => {
  const initialState = useInitialState() as IInitialState

  return(
    <BrowserRouter>
      <AppContext.Provider value={initialState}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pokemon/:name" element={<PokemonDetail />} />
            <Route path="/pokemon/:name/photos" element={<PokemonPhotos />}/>
            <Route path="/ability/:id/" element={<Ability />}/>
          </Routes>
        </Layout>
      </AppContext.Provider>
    </BrowserRouter>
  )
}

export { App }
