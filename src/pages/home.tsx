import { AnimacionCarga } from "../components/animacionCarga";
import { Category } from "../components/moviesCategories/category";
import { ScrollMovies } from "../components/scrollMovies";
import { FlexCol } from "../components/tw-components";
import { useConnectApi } from "../customHooks/connectApi";
import { useGetCategories } from "../customHooks/getCategories";
import { StructureMovies } from "../types/StructureMovies";

const Home = () => {
  const { data, state } = useConnectApi<StructureMovies>({
    recurso: "movie/popular",
  });
  const { genders, hasData } = useGetCategories();
  if (state.hasData)
    return (
      <FlexCol>
        <ScrollMovies data={data} title={"Popular"} />
        {hasData.hasData &&
          genders.genres.map(({ id, name }) => {
            return <Category id={id} key={id} name={name} />;
          })}
      </FlexCol>
    );
  else if (!state.loading && !state.hasData) {
    return <div>No hay datos</div>;
  } else {
    return <AnimacionCarga />;
  }
};
export default Home;
