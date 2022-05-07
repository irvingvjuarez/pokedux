import { getMainPhotos } from "./utils"
import { Link } from "react-router-dom"
import { useState, useRef, useEffect } from "react";

let leftScroll: number
const SLIDE_SIZE = 380

interface CarouselProps {
  title: string;
  imagesList: object;
}

const Carousel: React.FC<CarouselProps> = ({ title, imagesList }): JSX.Element => {
  const photosArr = getMainPhotos(imagesList)
  const sliderRef = useRef<HTMLUListElement | null>(null)
  const [slide, setSlide] = useState<number>(0)
  const handleRight = () => setSlide(prev => prev += 1)
  const handleLeft = () => setSlide(prev => prev -= 1)

  useEffect(() => {
    if(slide >= photosArr.length) setSlide(0)
    if(slide < 0) setSlide(photosArr.length - 1)
    leftScroll = slide * SLIDE_SIZE

    if(sliderRef.current) sliderRef.current.scroll({
      top: 0,
      left: leftScroll,
      behavior: 'smooth'
    });
  }, [slide])


  return(
    <section className="detail-carousel">
      <div className="detail-carousel__head">
        <h2>{title}</h2>

        <Link to="">
          See all
        </Link>
      </div>

      <div className="detail-carousel__container">
        <div className="detail-carousel__slider" onClick={handleLeft}>
          <button>&laquo;</button>
        </div>

        <ul
          ref={sliderRef}
          className="detail-carousel__list"
          style={{gridTemplateColumns: `repeat(${photosArr.length}, var(--grid-percent))`}} >

          {photosArr.map(photo => (
            <li key={photo.url}>
              <img src={photo.url} alt={photo.title} />
            </li>
          ))}
        </ul>

        <div className="detail-carousel__slider">
          <button onClick={handleRight}>&raquo;</button>
        </div>
      </div>

      <ul className="detail-carousel__guides">
        {photosArr.map((item, index) => (
          <li
            id={index.toString()}
            key={item.title}
            className="detail-carousel__guide"></li>
        ))}
      </ul>
    </section>
  )
}

export { Carousel }