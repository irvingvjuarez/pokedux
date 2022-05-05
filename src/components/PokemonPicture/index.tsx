import { PokemonPictureProps } from "./types"

const PokemonPicture: React.FC<PokemonPictureProps> = ({
  front, back = front, alt, 
  containerSide = "100px",
  isProfilePicture
}): JSX.Element => {
  const styles = { with: containerSide, height: containerSide }

  return(
    <div
      style={styles}
      className={`pokemon-picture ${ isProfilePicture ? "profile" : "standard"}`}>
      <img
        width={containerSide}
        src={front}
        alt={alt} />
    </div>
  )
}

export { PokemonPicture }