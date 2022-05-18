import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home } from "../pages/Home";
import { PokemonDetail } from "../pages/PokemonDetail";
import { PokemonPhotos } from "../pages/PokemonPhotos";
import { Ability } from "../pages/Ability";
import { Move } from "../pages/Move";
import { NotFound } from "../pages/NotFound";
import { Pokedux } from "../pages/Pokedux";

import { Layout } from "../containers/Layout"
import { Modal } from "../containers/Modal"

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
            <Route path="/move/:id/" element={<Move />} />
            <Route path="/pokedux" element={<Pokedux />} />
            <Route path="/pokedux/:name" element={<PokemonDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>

        <Modal
          isModalOpen={initialState.state.isModalOpen}
          toggle={initialState.toggleModal} />
      </AppContext.Provider>
    </BrowserRouter>
  )
}

export { App }
