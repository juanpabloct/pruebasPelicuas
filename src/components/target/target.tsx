import { EstructureMovie } from "../../types/estructureMovie";

export const Target = ({ pelicula }: { pelicula: EstructureMovie }) => {
  const { adult, backdrop_path, title } = pelicula;
  console.log();

  return (
    <img
      src={`https://image.tmdb.org/t/p/w780${backdrop_path}`}
      alt={title}
      className="aspect-video w-1/3 "
    />
  );
};
