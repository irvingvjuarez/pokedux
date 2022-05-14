interface AlbumProps {
  title: string;
  imagesList: object;
}

const Album: React.FC<AlbumProps> = ({ title, imagesList }): JSX.Element => {
  console.log(imagesList)

  return(
    <article className="album">
      <h2 className="album__title">{title}</h2>

      <div className="album__content">
        <span>Content...</span>
      </div>
    </article>
  )
}

export { Album }