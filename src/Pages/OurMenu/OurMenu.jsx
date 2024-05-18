import { Helmet } from "react-helmet-async";
import Cover from "./Cover";
import imgage from '../../assets/menu/banner3.jpg'
import imgge2 from '../../assets/home/chef-service.jpg'
import pizzaimg from '../../assets/menu/pizza-bg.jpg'
import saladimg from '../../assets/menu/salad-bg.jpg'
import soupimg from '../../assets/menu/soup-bg.jpg'
import UseMenu from "../../hooks/UseMenu";
import SectionTitle from "../../components/SectionTitle";
import CoverMenu from "../../shared/CoverMenu";
const OurMenu = () => {
  const [menu]=UseMenu();
  const dessert =menu.filter((i) => i.category === "dessert")
  const pizza =menu.filter((i) => i.category === "pizza")
  const salad =menu.filter((i) => i.category === "salad")
  const soup =menu.filter((i) => i.category === "soup")
  const offered =menu.filter((i) => i.category === "offered")
  return (
    <div>
      <Helmet>
        <title> Kutumbari || OurMenu</title>
      </Helmet>
      <Cover img={imgage} title={'OUR MENU'} subtitle={'Would you like to try a dish?'}/>
      <SectionTitle subtitle={"dont't miss"} title={"today's offer"}/>
      <CoverMenu offer={offered}/>

      <Cover img={imgge2} title={'DESSERTS'} subtitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}/>
      <CoverMenu offer={dessert}/>
      <Cover img={pizzaimg} title={'pizza'} subtitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}/>
      <CoverMenu offer={pizza}/>
      <Cover img={saladimg} title={'salad'} subtitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}/>
      <CoverMenu offer={salad}/>
      <Cover img={soupimg} title={'soup'} subtitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}/>
      <CoverMenu offer={soup}/>
    </div>
  );
};

export default OurMenu;
