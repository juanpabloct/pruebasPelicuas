import { useNavigate } from "react-router-dom";
import { EstructureMovie } from "../../types/estructureMovie";
import { Image } from "./image";

export const Target = ({ pelicula }: { pelicula: EstructureMovie }) => {
  const { title, poster_path, id } = pelicula;
  const navigate = useNavigate();
  return (
    <figure className="w-full aspect-[2/3] relative">
      <Image poster_path={poster_path} title={title} />
      <figcaption
        onClick={() => {
          navigate(`/movie/${id}`);
        }}
        className="m-auto text-xl text-transparent hover:text-white w-full text-center text- top-0 h-full items-center bg-none transition-colors ease-in hover:bg-[#00000063]  absolute font-semibold flex justify-center cursor-pointer"
      >
        <p className="w-10/12 text-ellipsis text-center">{title}</p>
      </figcaption>
    </figure>
  );
};
