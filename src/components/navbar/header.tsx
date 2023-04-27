import { Dispatch, SetStateAction } from "react";
import { FlexRow, Navbar } from "../tw-components";
import { Link } from "react-router-dom";
import { StyleLink } from "./StyleLink";

export const Header = ({
  setSearch,
  search,
}: {
  setSearch: Dispatch<SetStateAction<string>>;
  search: string;
}) => {
  return (
    <Navbar>
      <FlexRow className="text-[#ffdb9d] text-xl w-1/5 items-center">
        Cuvana
      </FlexRow>
      <FlexRow className="w-2/5">
        <StyleLink route={"#"}>Peliculas</StyleLink>
        <StyleLink route={"#"}>Programas De Televsion </StyleLink>
        <StyleLink route={"#"}>Personas</StyleLink>
      </FlexRow>
      <FlexRow className="w-1/5">
        <input
          className="rounded-xl text-center text-black focus:outline-none "
          placeholder="Busqueda"
          value={search}
          onChange={({ target }) => setSearch(target.value)}
        />
      </FlexRow>
    </Navbar>
  );
};
