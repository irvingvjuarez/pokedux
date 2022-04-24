import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from "../pages/Home";

const App: React.FC = (): JSX.Element => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export { App }
