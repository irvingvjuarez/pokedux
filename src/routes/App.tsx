import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home } from "../pages/Home";
import { useInitialState } from "../hooks/useInitialState"
import { AppContext } from "../context/AppContext"

const App: React.FC = (): JSX.Element => {
  const initialState = useInitialState()

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
