interface StandarButtonProps {
  text: string;
}

const StandarButton: React.FC<StandarButtonProps> = ({ text }): JSX.Element => {
  return(
    <button className="pokemon-detail__cta">
      {text}
    </button>
  )
}

export { StandarButton }