import Cover from "../OurMenu/Cover";
import ourshopimg from "../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import ShopCard from "../../shared/ShopCard";
import UseMenu from "../../hooks/UseMenu";
import ShopTabPanel from "../../components/ourshop/ShopTabPanel";
const OruShop = () => {
  const [menu, usemenu] = UseMenu();
  const dessert = menu.filter((i) => i.category === "dessert");
  const pizza = menu.filter((i) => i.category === "pizza");
  const salad = menu.filter((i) => i.category === "salad");
  const soup = menu.filter((i) => i.category === "soup");
  const drinks = menu.filter((i) => i.category === "drinks");
  return (
    <div>
      <Cover
        img={ourshopimg}
        title={"OUR SHOP"}
        subtitle={"Would you like to try a dish?"}
      />

      <Tabs>
        <div className="w-fit mx-auto mt-12">
          <TabList>
            <Tab>Salad</Tab>
            <Tab>Pizza</Tab>
            <Tab>soups</Tab>
            <Tab>Pidesserts</Tab>
            <Tab>drinks</Tab>
          </TabList>
        </div>

        <TabPanel>
          <ShopTabPanel shiopitem={salad}/>
        </TabPanel>
        <TabPanel>
      <ShopTabPanel shiopitem={pizza}/>
        </TabPanel>
        <TabPanel>
        <ShopTabPanel shiopitem={soup}/>
        </TabPanel>
        <TabPanel>
        <ShopTabPanel shiopitem={dessert}/>
        </TabPanel>
        <TabPanel>
        <ShopTabPanel shiopitem={drinks}/>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default OruShop;
