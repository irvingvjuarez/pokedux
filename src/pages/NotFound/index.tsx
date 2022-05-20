import Pikachu404 from "../../assets/pikachu.png"

const NotFound: React.FC = (): JSX.Element => {
  return(
    <section className="page not-found">
      <article className="not-found__wrapper">
        <h2>Page Not Found</h2>

        <figure>
          <img src={Pikachu404} alt="pikachu 404" />
          <figcaption>Pikachu is confused</figcaption>
        </figure>
      </article>
    </section>
  )
}

export default NotFound