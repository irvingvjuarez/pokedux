import Linkedin from "../../assets/linkedin.png"
import Twitter from "../../assets/twitter.png"
import Github from "../../assets/github.png"

const Media: React.FC = (): JSX.Element => {
  return(
    <ul className="media">
      <li><img src={Linkedin} alt="linkedin" /></li>
      <li><img src={Github} alt="github" /></li>
      <li><img src={Twitter} alt="twitter" /></li>
    </ul>
  )
}

export { Media }