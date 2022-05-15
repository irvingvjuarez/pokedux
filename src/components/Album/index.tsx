import { cleanTitle } from "../../utils/cleanTitle"
import { getImagesArr } from "../../utils/getImagesArr";

interface AlbumProps {
  title: string;
  imagesList: object;
}

const Album: React.FC<AlbumProps> = ({ title, imagesList }): JSX.Element => {
  const photosArr = getImagesArr(imagesList)

  return(
    <article className="album">
      <h2 className="album__title">
        {cleanTitle(title)}
      </h2>

      <div className="album__content">
        {photosArr.map(photo => (
          <div key={photo.title} className="album__photo">
            <img src={photo.url} alt={photo.title} />
          </div>
        ))}
      </div>
    </article>
  )
}

export { Album }