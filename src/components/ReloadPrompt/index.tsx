// @ts-ignore
import { useRegisterSW } from "virtual:pwa-register/react"

const ReloadPrompt: React.FC = (): JSX.Element => {
  const { 
    offlineReady: [offlineReady, setOfflineReady],
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker
  } = useRegisterSW({
    onRegistered(r: ServiceWorkerRegistration | undefined){
      console.log('SW Registered' + r)
    },
    onRegisterError(error: any){
      console.log('SW Registered error' + error)
    }
  })

  const close = () => {
    setOfflineReady(false)
    setNeedRefresh(false)
  }

  return(
    <div className="ReloadPrompt-container">
      {(offlineReady || needRefresh) && (
        <div className="ReloadPrompt-toast">
          <div className="ReloadPrompt-message">
            { offlineReady
                  ? <span>App ready to work offline</span>
                  : <span>New content available, click on reload button to update.</span>
            }
          </div>
          { needRefresh && <button className="ReloadPrompt-toast-button" onClick={() => updateServiceWorker(true)}>Reload</button> }
          <button className="ReloadPrompt-toast-button" onClick={() => close()}>Close</button>
        </div>
      )}
    </div>
  )
}

export { ReloadPrompt }