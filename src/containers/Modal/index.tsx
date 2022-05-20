import ReactDOM from "react-dom";
import CloseIcon from "../../assets/close.svg"

const portalRoot = document.getElementById("portal") as Element
interface ModalProps {
  isModalOpen: {
    content: unknown;
    value: boolean
  };
  toggle(): void
}

const Modal: React.FC<ModalProps> = ({ isModalOpen, toggle }): JSX.Element => {
  const handleClosing = () => toggle()

  if(!isModalOpen.value) return <></>
  return ReactDOM.createPortal(
    <section className="modal">
      <button className="modal__close-btn" onClick={handleClosing}>
        <img src={CloseIcon} alt="" />
      </button>

      <article className="modal__wrapper">
        <img src={isModalOpen.content as string} alt="" />
      </article>
    </section>,
    portalRoot
  )
}

export default Modal