import { useNavigate } from "react-router-dom"
import ArrowLeft from "../../assets/arrow-left.svg"

const ReturnBar: React.FC = (): JSX.Element => {
  const navigate = useNavigate()
  const handleClick = () => navigate(-1)

  return(
    <div className="return-bar">
      <span onClick={handleClick}>
        <img src={ArrowLeft} alt="" />
      </span>
    </div>
  )
}

export { ReturnBar }