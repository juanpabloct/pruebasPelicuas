import { Dispatch, SetStateAction } from "react";
import { useConnectApi } from "../../customHooks/connectApi";
import { StructureMovies } from "../../types/StructureMovies";
import { AnimacionCarga } from "../animacionCarga";
import { FlexCol, FlexRow } from "../tw-components";
import { Target } from "../target/target";
interface SearchProps {
  filter: string;
  setSearch: Dispatch<SetStateAction<string>>;
}
export const Search = ({ filter, setSearch }: SearchProps) => {
  const { data, state } = useConnectApi<StructureMovies>({
    url: `&query=${filter}`,
    recurso: "search/movie",
  });
  if (state.loading) {
    return <AnimacionCarga />;
  }
  if (Array.isArray(data)) {
    return (
      <FlexRow className="justify-center items-center mt-4">
        <div className="flex w-10/12  flex-wrap container">
          {data.results.map((item) => (
            <div className="w-1/6" onClick={() => setSearch("")}>
              <Target pelicula={item} />
            </div>
          ))}
        </div>
      </FlexRow>
    );
  }
  return (
    <FlexCol className="justify-center align-middle m-auto items-center">
      <h3 className="text-2xl">
        <b>No se encontro busqueda para: </b>
        <span className="font-semibold">{filter}</span>
      </h3>
    </FlexCol>
  );
};
