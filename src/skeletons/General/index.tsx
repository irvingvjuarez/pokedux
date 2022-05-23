import { ARR } from "../../globals"
import { SidebarSkeleton } from "../Sidebar"
import PokemonSkeleton from "../Pokemon"

interface GeneralSkeletonProps {
  type: "home" | "detail" | "subpage" | "not-found"
}

const GeneralSkeleton: React.FC<GeneralSkeletonProps> = ({ type }): JSX.Element => {
  return (
    <section className="page general">
      <article className="general__sidebar">
        <SidebarSkeleton />
      </article>
      
      {type === "home" && (
        <article className="general__home">
          {ARR.map(item => <PokemonSkeleton id={item} key={item} />)}
        </article>
      )}
    </section>
  )
}

export { GeneralSkeleton }
