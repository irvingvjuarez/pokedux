import ReactDOM from "react-dom";

const portalRoot = document.getElementById("portal") as Element
interface ModalProps {
  isModalOpen: boolean;
  toggle(): void
}

const Modal: React.FC<ModalProps> = ({ isModalOpen, toggle }): JSX.Element => {
  if(!isModalOpen) return <></>
  return ReactDOM.createPortal(
    <section className="modal">
      <article className="modal__wrapper">
        {/* Here is where the content goes... */}
        <h2>I am the modal</h2>
      </article>
    </section>,
    portalRoot
  )
}

export { Modal }