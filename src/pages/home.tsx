import { FlexRow, Navbar } from "../components/tw-components";
import { useConnectApi } from "../customHooks/connectApi";

const Home = () => {
  const { data } = useConnectApi("movie/popular");
  console.log(data);

  return <div>sdfsdfsdsdf</div>;
};
export default Home;
