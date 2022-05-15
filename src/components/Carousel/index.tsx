import { Link } from "react-router-dom"
import { useState, useRef, useEffect } from "react";
import { getImagesArr } from "../../utils/getImagesArr"
import { CarouselProps } from "./types"
import { cleanTitle } from "../../utils/cleanTitle";

import { CarouselGuides } from "../CarouselGuides"

let leftScroll: number
let behaviorScroll: ScrollBehavior | undefined
const SLIDE_SIZE = 380

const Carousel: React.FC<CarouselProps> = ({ title, imagesList, url }): JSX.Element => {
  const photosArr = getImagesArr(imagesList)
  const sliderRef = useRef<HTMLUListElement | null>(null)
  const [slide, setSlide] = useState<number>(0)
  const handleRight = () =>{
    behaviorScroll = slide === photosArr.length - 1 ? "auto" : "smooth"
    setSlide(prev => prev += 1)
  }
  const handleLeft = () =>{
    behaviorScroll = slide === 0 ? "auto" : "smooth"
    setSlide(prev => prev -= 1)
  }

  
  useEffect(() => {
    if(slide >= photosArr.length) setSlide(0)
    if(slide < 0) setSlide(photosArr.length - 1)
    
    leftScroll = slide * SLIDE_SIZE
    if(sliderRef.current) sliderRef.current.scroll({
      top: 0,
      left: leftScroll,
      behavior: behaviorScroll
    });
  }, [slide])


  return(
    <section className="detail-carousel">
      <div className="detail-carousel__head">
        <h2>{cleanTitle(title)}</h2>

        {url && (
          <Link to={url}>See all</Link>
        )}
      </div>

      <div className="detail-carousel__container">
        <div className="detail-carousel__slider">
          <button onClick={handleLeft}>&laquo;</button>
        </div>

        <ul
          ref={sliderRef}
          className="detail-carousel__list"
          style={{gridTemplateColumns: `repeat(${photosArr.length}, var(--grid-percent))`}} >

          {photosArr.map(photo => (
            <li key={photo.url}>
              <img src={photo.url} alt={photo.title} min-height={250} min-width={250} />
            </li>
          ))}
        </ul>

        <div className="detail-carousel__slider">
          <button onClick={handleRight}>&raquo;</button>
        </div>
      </div>

      <CarouselGuides arr={photosArr} active={slide} />
    </section>
  )
}

export { Carousel }