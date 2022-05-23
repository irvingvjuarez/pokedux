import ReactDOM from "react-dom"
import { useContext } from "react"
import { AppContext } from "../../context/AppContext"
import { IInitialState } from "../../types"

const Notification: React.FC = (): JSX.Element => {
  const { state:{notification} } = useContext(AppContext) as IInitialState

  return(
    ReactDOM.createPortal(
      <div className="notification">
        <span className="notification__message">  
          {notification.content}
        </span>
      </div>,
      document.getElementById("notification") as Element
    )
  )
}

export default Notification