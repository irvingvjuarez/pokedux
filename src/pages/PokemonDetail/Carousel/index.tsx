import { cleanObj } from "./utils"

interface CarouselProps {
  title: string;
  imagesList: object;
}

const Carousel: React.FC<CarouselProps> = ({ title, imagesList }): JSX.Element => {
  // imagesList = cleanObj(imagesList) as object

  return(
    <section className="detail-carousel">
      <h2>{title}</h2>
    </section>
  )
}

export { Carousel }