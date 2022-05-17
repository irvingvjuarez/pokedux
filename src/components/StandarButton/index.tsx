import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { IInitialState, IPokemon } from "../../types";

interface StandarButtonProps {
  text: "Catch it" | "Release it";
  target: IPokemon
}

const StandarButton: React.FC<StandarButtonProps> = ({ text, target }): JSX.Element => {
  const { state:{pokedux}, addToPokedux, removeFromPokedux } = useContext(AppContext) as IInitialState
  const handleClick = () => {
    if(text === "Catch it"){
      addToPokedux(target)
    }else{
      removeFromPokedux(target.id)
    }
  }

  console.log("Pokedux", pokedux)

  return(
    <button className="standar-button" onClick={handleClick}>
      {text}
    </button>
  )
}

export { StandarButton }