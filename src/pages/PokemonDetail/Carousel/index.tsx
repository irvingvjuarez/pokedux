import { getMainPhotos } from "./utils"
import { Link } from "react-router-dom"

interface CarouselProps {
  title: string;
  imagesList: object;
}

const Carousel: React.FC<CarouselProps> = ({ title, imagesList }): JSX.Element => {
  const photosArr = getMainPhotos(imagesList)

  return(
    <section className="detail-carousel">
      <div className="detail-carousel__head">
        <h2>{title}</h2>

        <Link to="">
          See all
        </Link>
      </div>

      <div className="detail-carousel__container">
        <ul
          className="detail-carousel__list"
          style={{gridTemplateColumns: `repeat(${photosArr.length}, var(--grid-percent))`}} >

          {photosArr.map(photo => (
            <li key={photo.url}>
              <img src={photo.url} alt={photo.title} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export { Carousel }