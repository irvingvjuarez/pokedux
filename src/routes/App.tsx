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
import { ReloadPrompt } from "../components/ReloadPrompt"

import Layout from "../containers/Layout"
import { useInitialState } from "../hooks/useInitialState"
import { AppContext } from "../context/AppContext"
import { IInitialState } from '../types';
import { GeneralSkeleton } from "../skeletons/General"

const App: React.FC = (): JSX.Element => {
  const initialState = useInitialState() as IInitialState
  const { state:{pokemons, abilities, moves, searchResults, results} } = initialState

  const initialValue = useMemo(
    () => ({ ...initialState }), 
    [pokemons, abilities, moves, searchResults, results]
  )

  return(
    <BrowserRouter>
      <AppContext.Provider value={initialValue}>
        <Layout>
          <Routes>
            <Route path="/" element={
              <Suspense fallback={<GeneralSkeleton type="home" />}>
                <Home />
              </Suspense>
            } />
            <Route path="/pokemon/:name" element={
              <Suspense fallback={<GeneralSkeleton type="detail" />}>
                <PokemonDetail />
              </Suspense>
            } />
            <Route path="/pokemon/:name/photos" element={
              <Suspense fallback={<GeneralSkeleton type="detail" />}>
                <PokemonPhotos />
              </Suspense>
            }/>
            <Route path="/ability/:id/" element={
              <Suspense fallback={<GeneralSkeleton type="subpage" />}>
                <Ability />
              </Suspense>
            }/>
            <Route path="/move/:id/" element={
              <Suspense fallback={<GeneralSkeleton type="subpage" />}>
                <Move />
              </Suspense>
            } />
            <Route path="/pokedux" element={
              <Suspense fallback={<GeneralSkeleton type="home" />}>
                <Pokedux />
              </Suspense>
            } />
            <Route path="/pokedux/:name" element={
              <Suspense fallback={<GeneralSkeleton type="detail" />}>
                <PokemonDetail />
              </Suspense>
            } />
            <Route path="*" element={
              <Suspense fallback={<GeneralSkeleton type="subpage" />}>
                <NotFound />
              </Suspense>
            } />
          </Routes>
        </Layout>

        {initialState.state.isModalOpen.value && (
          <Suspense fallback={null}>
            <Modal
              isModalOpen={initialState.state.isModalOpen}
              toggle={initialState.toggleModal} />
          </Suspense>
        )}

        {initialState.state.notification.value && (
          <Suspense fallback={null}>
            <Notification />
          </Suspense>
        )}

        <ReloadPrompt />
      </AppContext.Provider>
    </BrowserRouter>
  )
}

export { App }
