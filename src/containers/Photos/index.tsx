import { Album } from "../../components/Album"
import { ISprites } from "../../types"
import { getNewAlbum } from "./utils"

interface PhotosProps {
  album: ISprites
}

const Photos: React.FC<PhotosProps> = ({ album }): JSX.Element => {
  const newAlbum = getNewAlbum(album)

  return(
    <section className="photos">
      {Object.keys(newAlbum).map(album => (
        <Album
          key={album}
          title={album}
          imagesList={newAlbum[album as keyof object]} />
          ))}
    </section>
  )
}

export { Photos }


// <Carousel
//   key={obj}
//   title={obj}
//   imagesList={newAlbum[obj as keyof object]} />