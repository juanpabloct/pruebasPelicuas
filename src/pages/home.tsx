import { AnimacionCarga } from "../components/animacionCarga";
import { Target } from "../components/target/target";
import { FlexCol, FlexRow, Navbar } from "../components/tw-components";
import { useConnectApi } from "../customHooks/connectApi";
import { StructureMovies } from "../types/StructureMovies";

const Home = () => {
  const { data, state } = useConnectApi({ recurso: "movie/popular" });
  if (state.hasData)
    return (
      <div className="w-full aspect-square flex">
        {data.results.map((movie) => {
          return <Target pelicula={movie} key={movie.id} />;
        })}
      </div>
    );
  else if (!state.loading && !state.hasData) {
    return <div>No hay datos</div>;
  } else {
    return <AnimacionCarga />;
  }
};
export default Home;
