interface SwitchProps {
  validator: boolean;
  handler: () => void;
  ID: string
}

const Switch: React.FC<SwitchProps> = ({ validator, handler, ID }): JSX.Element => {
  return(
    <>
      <div className={`switch ${validator && "on"}`}>
        <label htmlFor={`switch-${ID}`} ></label>
        <input onClick={handler} type="radio" id={`switch-${ID}`} hidden />
      </div>

      <h3 className={`switch__version ${validator && "on"}`} >{validator ? "Anime" : "Normal"}</h3>
    </>
  )
}

export { Switch }