import { useConnectApi } from "./connectApi";
import { CategoriesMovies } from "../types/categories";

export const useGetCategories = () => {
  const { data: genders, state: hasData } = useConnectApi<CategoriesMovies>({
    recurso: "genre/movie/list",
  });
  return { genders, hasData };
};
