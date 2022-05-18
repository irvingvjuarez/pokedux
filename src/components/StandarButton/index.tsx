import { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { IInitialState, IPokemon } from "../../types";

interface StandarButtonProps {
  text: "Catch it" | "Release it";
  target: IPokemon
}

const StandarButton: React.FC<StandarButtonProps> = ({ text, target }): JSX.Element => {
  const { state:{pokedux}, addToPokedux, removeFromPokedux } = useContext(AppContext) as IInitialState
  const [action, setAction] = useState(text)
  const handleClick = () => {
    if(action === "Catch it"){
      setAction("Release it")
      addToPokedux(target)
    }else{
      setAction("Catch it")
      removeFromPokedux(target.id)
    }
  }

  return(
    <button className="standar-button" onClick={handleClick}>
      {action}
    </button>
  )
}

export { StandarButton }