import { ICarouselGuides } from "../Carousel/types"

const CarouselGuides: React.FC<ICarouselGuides> = ({ arr, active }): JSX.Element => {
  return(
    <ul className="guides">
      {arr.map((item, index) => (
        <li
          key={item.title}
          className={`guides__item ${index === active && "on"}`}></li>
      ))}
    </ul>
  )
}

export { CarouselGuides }