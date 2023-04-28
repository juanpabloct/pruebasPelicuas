import { useConnectApi } from "../../customHooks/connectApi";
import { StructureMovies } from "../../types/StructureMovies";
import { ScrollMovies } from "../scrollMovies";
interface CategoryProps {
  id: number | string;
  name: string;
}
export const Category = ({ id, name }: CategoryProps) => {
  const { data, state } = useConnectApi<StructureMovies>({
    recurso: "discover/movie",
    url: `&with_genres=${id}/${name}`,
  });

  return state.hasData ? (
    <ScrollMovies data={data} title={name} id={id} />
  ) : (
    <div />
  );
};
