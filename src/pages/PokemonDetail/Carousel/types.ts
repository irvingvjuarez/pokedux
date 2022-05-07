export interface CarouselProps {
  title: string;
  imagesList: object;
}

export interface ICarouselGuides {
  arr: Array<{title: string}>,
  active: number
}