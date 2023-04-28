import { StructureMovies } from "../types/StructureMovies";
import { useConnectApi } from "./connectApi";
interface useGetInfoCategoryProps {
  id: number | string;
  name: string;
}
export const useGetInfoCategory = ({ id, name }: useGetInfoCategoryProps) => {
  const { data, state } = useConnectApi<StructureMovies>({
    recurso: "discover/movie",
    url: `&with_genres=${id}/${name}`,
  });
  return { data, state };
};
