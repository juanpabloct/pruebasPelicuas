import { useParams } from "react-router-dom";
import { useConnectApi } from "../customHooks/connectApi";
import { EstructureMovie } from "../types/estructureMovie";
import { FlexCol, FlexRow } from "../components/tw-components";
import { Image } from "../components/target/image";
import { Results } from "../components/results";
const Movie = () => {
  const { id } = useParams();
  const { data } = useConnectApi<EstructureMovie>({
    recurso: `movie/${id}`,
  });
  const {
    backdrop_path,
    title,
    popularity,
    release_date,
    vote_count,
    vote_average,
    overview,
    original_title,
  } = data;
  return (
    <>
      <FlexCol className=" bg-slate-900 h-full flex-1 gap-9 items-center pt-4">
        <h1 className="text-2xl font-bold text-white mt-2">{title}</h1>
        <div className=" w-1/2 aspect-video flex-auto flex-shrink-[6] flex-shrink-{6] flex-[200px]">
          <Image poster_path={backdrop_path} title={title} />
        </div>
        <div className="w-11/12 text-white flex-shrink-[5] flex-shrink-{3] flex-[200px] px-2 md:text-xl">
          <Results title={"Review"} value={overview} />
          <FlexRow className="flex-wrap justify-between">
            <Results title={"Original Title"} value={original_title} />
            <Results title={"Popularity"} value={popularity} />
            <Results title={"Release Date"} value={`${release_date}`} />
            <Results title={"Vote Count"} value={vote_count} />
            <Results title={"Vote Average"} value={vote_average} />
          </FlexRow>
        </div>
      </FlexCol>
    </>
  );
};
export default Movie;
