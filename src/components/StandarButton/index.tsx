interface StandarButtonProps {
  text: string;
}

const StandarButton: React.FC<StandarButtonProps> = ({ text }): JSX.Element => {
  return(
    <button className="standar-button">
      {text}
    </button>
  )
}

export { StandarButton }