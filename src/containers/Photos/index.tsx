import { ISprites } from "../../types"
import { getNewAlbum } from "./utils"

interface PhotosProps {
  album: ISprites
}

const Photos: React.FC<PhotosProps> = ({ album }): JSX.Element => {
  const newAlbum = getNewAlbum(album)
  console.log(newAlbum)

  return(
    <section className="photos">
      <h2>I am the Photos container!!</h2>
    </section>
  )
}

export { Photos }