import { FlexCol } from "../tw-components";
import { Routes } from "./navegacion";
interface MenuPhoneProps {
  showMenu: boolean;
}
export const MenuPhone = ({ showMenu }: MenuPhoneProps) => {
  return (
    <FlexCol
      className={`bg-[#141a32] right-0 md:hidden h-[100vh] fixed w-36 items-stretch  top-16  text-white justify-start text-center gap-7 pt-2 transition-all delay-400  ${
        showMenu ? "translate-x-36  invisible" : "visible "
      }`}
    >
      <Routes />
    </FlexCol>
  );
};
