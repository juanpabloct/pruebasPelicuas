import { AnimacionCarga } from "../components/animacionCarga";
import { ScrollMovies } from "../components/scrollMovies";
import { useConnectApi } from "../customHooks/connectApi";
import { StructureMovies } from "../types/StructureMovies";

const Home = () => {
  const { data, state } = useConnectApi<StructureMovies>({
    recurso: "movie/popular",
  });
  if (state.hasData) return <ScrollMovies data={data} title={"Popular"} />;
  else if (!state.loading && !state.hasData) {
    return <div>No hay datos</div>;
  } else {
    return <AnimacionCarga />;
  }
};
export default Home;
