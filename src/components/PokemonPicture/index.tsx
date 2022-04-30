import { useState } from "react"
import { PokemonPictureProps } from "./types"

const PokemonPicture: React.FC<PokemonPictureProps> = ({
  front, back = front, alt, 
  containerSide = "100px",
  isProfilePicture
}): JSX.Element => {
  const [isImageHovered, setIsImageHovered] = useState<boolean>(false)
  const handleIn = () => setIsImageHovered(true)
  const handleOut = () => setIsImageHovered(false)
  const handleTap = () => setIsImageHovered(prev => !prev)
  const styles = { with: containerSide, height: containerSide }

  return(
    <div
      style={styles}
      className={isProfilePicture ? "profile" : "pokemon-picture"}>
      <img
        width={containerSide}
        onMouseOver={handleIn}
        onMouseOut={handleOut}
        onTouchStart={handleTap}
        src={isImageHovered ? back : front}
        alt={alt} />
    </div>
  )
}

export { PokemonPicture }