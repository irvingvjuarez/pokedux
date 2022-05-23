import { lazy, Suspense, useMemo } from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const Home = lazy(() => import("../pages/Home"))
const PokemonDetail = lazy(() => import("../pages/PokemonDetail"))
const PokemonPhotos = lazy(() => import("../pages/PokemonPhotos"))
const Ability = lazy(() => import("../pages/Ability"))
const Move = lazy(() => import("../pages/Move"))
const NotFound = lazy(() => import("../pages/NotFound"))
const Pokedux = lazy(() => import("../pages/Pokedux"))
const Modal = lazy(() => import("../containers/Modal"))
const Notification = lazy(() => import("../components/Notification"))

import Layout from "../containers/Layout"
import { useInitialState } from "../hooks/useInitialState"
import { AppContext } from "../context/AppContext"
import { IInitialState } from '../types';

const App: React.FC = (): JSX.Element => {
  const initialState = useInitialState() as IInitialState
  const initialValue = useMemo(() => ({ ...initialState }), [initialState.state.pokemons])

  return(
    <BrowserRouter>
      <AppContext.Provider value={initialValue}>
        <Layout>
          <Routes>
            <Route path="/" element={
              <Suspense fallback="Loading...">
                <Home />
              </Suspense>
            } />
            <Route path="/pokemon/:name" element={
              <Suspense fallback="Loading...">
                <PokemonDetail />
              </Suspense>
            } />
            <Route path="/pokemon/:name/photos" element={
              <Suspense fallback="Loading...">
                <PokemonPhotos />
              </Suspense>
            }/>
            <Route path="/ability/:id/" element={
              <Suspense fallback="Loading...">
                <Ability />
              </Suspense>
            }/>
            <Route path="/move/:id/" element={
              <Suspense fallback="Loading...">
                <Move />
              </Suspense>
            } />
            <Route path="/pokedux" element={
              <Suspense fallback="Loading...">
                <Pokedux />
              </Suspense>
            } />
            <Route path="/pokedux/:name" element={
              <Suspense fallback="Loading...">
                <PokemonDetail />
              </Suspense>
            } />
            <Route path="*" element={
              <Suspense fallback="Loading...">
                <NotFound />
              </Suspense>
            } />
          </Routes>
        </Layout>

        {initialState.state.isModalOpen.value && (
          <Suspense fallback="Loading...">
            <Modal
              isModalOpen={initialState.state.isModalOpen}
              toggle={initialState.toggleModal} />
          </Suspense>
        )}

        {initialState.state.notification.value && (
          <Suspense fallback="Loading..."><Notification /></Suspense>
        )}
      </AppContext.Provider>
    </BrowserRouter>
  )
}

export { App }
