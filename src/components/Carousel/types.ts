export interface CarouselProps {
  title: string;
  imagesList: object;
  url?: string;
}

export interface ICarouselGuides {
  arr: Array<{title: string}>,
  active: number
}