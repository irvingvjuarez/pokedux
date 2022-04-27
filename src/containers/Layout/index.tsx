import { Header } from "../../components/Header"

const Layout: React.FC<{children: JSX.Element}> = ({ children }): JSX.Element => {
  return(
    <>
      <Header />
      {children}
    </>
  )
}

export { Layout }