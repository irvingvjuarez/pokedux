import { Carousel } from "../../components/Carousel"
import { ISprites } from "../../types"
import { getNewAlbum } from "./utils"

interface PhotosProps {
  album: ISprites
}

const Photos: React.FC<PhotosProps> = ({ album }): JSX.Element => {
  const newAlbum = getNewAlbum(album)

  return(
    <section className="photos">
      {Object.keys(newAlbum).map(obj => (
        <Carousel
          key={obj}
          title={obj}
          imagesList={newAlbum[obj as keyof object]} />
      ))}
    </section>
  )
}

export { Photos }