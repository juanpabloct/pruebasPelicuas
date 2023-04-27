import { useConnectApi } from "../customHooks/connectApi";

const Home = () => {
  const { data } = useConnectApi("movie/popular");
  console.log(data);

  return <div>HJomeeee</div>;
};
export default Home;
