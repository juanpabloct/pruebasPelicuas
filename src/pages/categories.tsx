import { useParams } from "react-router-dom";
import { Category } from "../components/moviesCategories/category";
import { FlexRow } from "../components/tw-components";
import { useGetInfoCategory } from "../customHooks/getInfoCategory";

export const Categories = () => {
  const { id, name } = useParams();
  if (id && name) {
    return <Category id={id?.toString()} name={name} />;
  }
  return (
    <FlexRow>
      <h2>Hace falta el usuario o el Id</h2>
    </FlexRow>
  );
};
