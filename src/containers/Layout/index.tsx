import { memo } from "react"
import { Header } from "../../components/Header"

const Layout: React.FC<{children: JSX.Element}> = ({ children }): JSX.Element => {
  return(
    <>
      <Header />
      {children}
    </>
  )
}

export default memo(
  Layout,
  (prevProps, nextProps) => prevProps.children.props.children.length === nextProps.children.props.children.length
)