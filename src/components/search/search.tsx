import { Dispatch, SetStateAction } from "react";
import { useConnectApi } from "../../customHooks/connectApi";
import { StructureMovies } from "../../types/StructureMovies";
import { AnimacionCarga } from "../animacionCarga";
import { FlexCol } from "../tw-components";
import { ContentTargets } from "../contentTargets";
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
  if (state.hasData && data.results.length > 0) {
    return (
      <FlexCol>
        <h1 className="text-center text-xl md:text-3xl font-semibold py-5">
          Busqueda para: {filter}
        </h1>
        <ContentTargets data={data} setSearch={setSearch} />;
      </FlexCol>
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
