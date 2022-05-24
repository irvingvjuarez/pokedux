import Pikachu404 from "../../assets/pikachu.png"
import { useHelmet } from "../../hooks/useHelmet"

const NotFound: React.FC = (): JSX.Element => {
  useHelmet("Pokemon not found", "Pikachu was unabled to find the pokemon you are looking for at this moment")

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