import { Dispatch, SetStateAction, useState } from "react";
import { FlexCol, FlexRow, Navbar } from "../tw-components";
import { Link } from "react-router-dom";
import { StyleLink } from "./StyleLink";
import { IconMenu } from "../iconMenu";
import { Routes } from "./navegacion";
import { MenuPhone } from "./menuPhone";

interface HeaderProps {
  setSearch: Dispatch<SetStateAction<string>>;
  search: string;
}
export const Header = ({ setSearch, search }: HeaderProps) => {
  const [showMenu, setShowMenu] = useState(false);
  const [busqueda, setBusqueda] = useState("");
  return (
    <>
      <Navbar>
        <FlexRow className="text-[#ffdb9d] text-xl w-1/5 items-center">
          Cuvana
        </FlexRow>
        <FlexRow className="w-2/5 hidden md:flex">
          <Routes />
        </FlexRow>
        <FlexRow className="w-1/5">
          <input
            className="rounded-xl text-center text-black focus:outline-none min-w-[6rem]"
            placeholder="Busqueda"
            value={busqueda}
            onChange={({ target }) => {
              setBusqueda(target.value);
            }}
            onBlur={({ target }) => setSearch(target.value)}
          />
        </FlexRow>
        <IconMenu action={() => setShowMenu((current) => !current)} />
        <MenuPhone showMenu={showMenu} />
      </Navbar>
    </>
  );
};
