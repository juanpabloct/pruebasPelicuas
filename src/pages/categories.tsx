import { useParams } from "react-router-dom";
import { Category } from "../components/moviesCategories/category";
import { FlexCol, FlexRow } from "../components/tw-components";

export const Categories = () => {
  const { id, name } = useParams();
  if (id && name) {
    return (
      <FlexCol>
        <h1 className="md:text-3xl xl text-center font-bold py-1">{name}</h1>
        <Category id={id?.toString()} type="targets" name={name} />;
      </FlexCol>
    );
  }
  return (
    <FlexRow>
      <h2>Hace falta el usuario o el Id</h2>
    </FlexRow>
  );
};
