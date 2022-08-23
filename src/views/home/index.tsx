import { FunctionComponent } from "react";
import Header from "../../components/Header";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Grant from "./components/Grant";
import Works from "./components/Works";
interface IProps {}
const Home: FunctionComponent<IProps> = () => {
  return (
    <>
      <Header />
      <Banner />
      <Works />
      <Grant />
      <Footer />
    </>
  );
};

export default Home;
