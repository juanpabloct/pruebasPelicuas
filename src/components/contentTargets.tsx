import { Dispatch, SetStateAction } from "react";
import { StructureMovies } from "../types/StructureMovies";
import { Target } from "./target/target";
import { FlexCol, FlexRow } from "./tw-components";

export const ContentTargets = ({
  data,
  setSearch,
}: {
  data: StructureMovies;
  setSearch?: Dispatch<SetStateAction<string>>;
}) => {
  const totalPages = data.total_pages;
  return (
    <FlexCol>
      <FlexRow className="justify-center items-center mt-4">
        <div className="flex w-10/12  flex-wrap container">
          {data.results.map((item) => (
            <div
              className="w-1/3 md:w-1/6"
              onClick={() => {
                setSearch && setSearch("");
              }}
              key={item.id}
            >
              <Target pelicula={item} />
            </div>
          ))}
        </div>
      </FlexRow>
      {}
      <FlexRow />
    </FlexCol>
  );
};
