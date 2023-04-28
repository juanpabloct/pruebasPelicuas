import { ReactNode } from "react";
import { StructureMovies } from "../types/StructureMovies";
import { Target } from "./target/target";
import { FlexCol, FlexRow } from "./tw-components";
import { useNavigate } from "react-router-dom";
interface ScrollMoviesProps {
  data: StructureMovies;
  title?: string | number | ReactNode;
  id?: number | string;
}
export const ScrollMovies = ({ data, title, id }: ScrollMoviesProps) => {
  const navigate = useNavigate();
  return (
    <FlexCol className="justify-center items-center mt-4">
      <FlexCol className="w-11/12 container">
        <FlexRow className="bg-zinc-300  text-center py-2 rounded-md relative">
          <h2 className="text-xl md:text-3xl font-semibold flex-1">{title}</h2>
          {id && (
            <p
              className="text-cyan-700 font-bold absolute right-6 h-full text-lg cursor-pointer"
              onClick={() => {
                navigate(`/category/${id}/${title}`);
              }}
            >
              Ver Mas
            </p>
          )}
        </FlexRow>
        <div className="flex w-full aspect-[10/3]  overflow-auto">
          {data.results.map((movie) => {
            return <Target pelicula={movie} key={movie.id} />;
          })}
        </div>
      </FlexCol>
    </FlexCol>
  );
};
