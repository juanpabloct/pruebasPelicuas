import { useConnectApi } from "../../customHooks/connectApi";
import { StructureMovies } from "../../types/StructureMovies";
import { ContentTargets } from "../contentTargets";
import { ScrollMovies } from "../scrollMovies";
interface CategoryProps {
  id: number | string;
  name: string;
  type?: "scroll" | "targets";
}
export const Category = ({ id, name, type }: CategoryProps) => {
  const { data, state } = useConnectApi<StructureMovies>({
    recurso: "discover/movie",
    url: `&with_genres=${id}/${name}`,
  });

  if (state.hasData) {
    if (!type || type === "scroll") {
      return <ScrollMovies data={data} title={name} id={id} />;
    } else {
      return <ContentTargets data={data} />;
    }
  }

  return <div></div>;
};
