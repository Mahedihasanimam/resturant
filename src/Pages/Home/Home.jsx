import { Helmet } from "react-helmet-async";
import CallUs from "../../components/CallUs";
import SectionTitle from "../../components/SectionTitle";
import MenuItem from "../../shared/menitem/MenuItem";
import About from "./About";



import CarouselSlide from "./CarouselSlide";
import Category from "./Category";
import Featured from "./Featured";
import Recomends from "./Recomends";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>  Kutumbari || Home</title>

      </Helmet>
      <CarouselSlide />
      <SectionTitle
        subtitle={"From 11:00am to 10:00pm"}
        title={"ORDER ONLINE"}
      />
      <Category/>
      <About/>
      <MenuItem/>
      <CallUs/>
      <Recomends/>
      <Featured/>
      <Testimonials/>
    </div>
  );
};

export default Home;
