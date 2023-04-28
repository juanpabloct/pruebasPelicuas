import { FlexCol } from "./tw-components";
interface iconMenuProps {
  action: () => void;
}
export const IconMenu = ({ action }: iconMenuProps) => {
  return (
    <FlexCol
      className="w-8 h-full gap-2  justify-center border-white  md:hidden "
      onClick={() => {
        action();
      }}
    >
      <div className="border-t-[3px]"></div>
      <div className="border-t-[3px]"></div>
      <div className="border-t-[3px]"></div>
    </FlexCol>
  );
};
