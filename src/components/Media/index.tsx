import Linkedin from "../../assets/linkedin.png"
import Twitter from "../../assets/twitter.png"
import Github from "../../assets/github.png"

interface MediaProps {
  profile: string
}

const Media: React.FC<MediaProps> = ({ profile }): JSX.Element => {
  return(
    <ul className="media">
      <li>
        <a target="_blank" href={`https://www.linkedin.com/in/${profile}/`}>
          <img src={Linkedin} alt="linkedin" />
        </a>
      </li>
      <li>
        <a target="_blank" href={"https://github.com/" + profile}>
          <img src={Github} alt="github" />
        </a>
      </li>
      <li>
        <a target="_blank" href={"https://twitter.com/" + profile}>
          <img src={Twitter} alt="twitter" />
        </a>
      </li>
    </ul>
  )
}

export { Media }