import ReactDOM from 'react-dom/client'
import { App } from './routes/App'
import './globals.scss'

// @ts-ignore
import { registerSW } from 'virtual:pwa-register'

const intervalMS = 60 * 60 * 1000

const updateSW = registerSW({
  onRegistered(r: ServiceWorkerRegistration | undefined) {
    r && setInterval(() => {
      r.update()
    }, intervalMS)
  }
})


ReactDOM.createRoot(document.getElementById('root')!).render(
  <App />
)

