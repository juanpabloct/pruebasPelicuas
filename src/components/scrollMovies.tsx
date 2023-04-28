import { ReactNode } from "react";
import { StructureMovies } from "../types/StructureMovies";
import { Target } from "./target/target";
import { FlexCol } from "./tw-components";
interface ScrollMoviesProps {
  data: StructureMovies;
  title?: string | number | ReactNode;
}
export const ScrollMovies = ({ data, title }: ScrollMoviesProps) => {
  return (
    <FlexCol className="justify-center items-center mt-4">
      <FlexCol className="w-11/12 container">
        <h2 className="text-3xl font-semibold  bg-zinc-300 w-full text-center my-2 rounded-md">
          {title}
        </h2>
        <div className="flex w-full aspect-[10/3]  overflow-auto">
          {data.results.map((movie) => {
            return <Target pelicula={movie} key={movie.id} />;
          })}
        </div>
      </FlexCol>
    </FlexCol>
  );
};
