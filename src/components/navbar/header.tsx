import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { FlexCol, FlexRow, Navbar } from "../tw-components";
import { Link } from "react-router-dom";
import { StyleLink } from "./StyleLink";
import { IconMenu } from "../iconMenu";
import { Routes } from "./navegacion";
import { MenuPhone } from "./menuPhone";
import { useConnectApi } from "../../customHooks/connectApi";
import { CategoriesMovies } from "../../types/categories";
import { Search } from "../search/search";

interface HeaderProps {
  setSearch: Dispatch<SetStateAction<string>>;
  search: string;
}
export const Header = ({ setSearch, search }: HeaderProps) => {
  const [showMenu, setShowMenu] = useState(false);
  const [busqueda, setBusqueda] = useState("");
  const { data } = useConnectApi<CategoriesMovies>({
    recurso: "genre/movie/list",
  });
  useEffect(() => {
    return () => {
      search !== busqueda && setBusqueda(search);
    };
  }, [search]);
  return (
    <Navbar>
      <FlexRow className="text-[#ffdb9d] text-xl md:text-2xl xl:2xl w-1/5 items-center">
        <span
          onClick={() => {
            setSearch("");
            setBusqueda("");
          }}
        >
          <Link to={"/"}>Cuvana</Link>
        </span>
      </FlexRow>
      <FlexRow className="w-2/5 hidden md:flex ">
        <Routes />
      </FlexRow>
      <FlexRow className="w-1/5 relative">
        <input
          className="rounded-xl text-center text-black focus:outline-none min-w-[6rem]"
          placeholder="Busqueda"
          value={busqueda}
          onChange={({ target }) => {
            setBusqueda(target.value);
          }}
          onBlur={({ target }) => setSearch(target.value)}
          onKeyUp={({ key }) => {
            key === "Enter" && setSearch(busqueda);
          }}
        />
        <button onClick={() => setSearch("")}>Limpiar</button>
      </FlexRow>
      <IconMenu action={() => setShowMenu((current) => !current)} />
      <MenuPhone showMenu={showMenu} />
    </Navbar>
  );
};
