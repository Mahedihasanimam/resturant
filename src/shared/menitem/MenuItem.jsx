
import SectionTitle from "../../components/SectionTitle";
import Menu from "./Menu";
import UseMenu from "../../hooks/UseMenu";
import { Link } from "react-router-dom";

const MenuItem = () => {
  const [menu]=UseMenu();
  const popular =menu.filter((i) => i.category === "popular")
  return (
    <section>
      <SectionTitle subtitle={"Check it out"} title={"FROM OUR MENU"} />
      <div className="grid lg:grid-cols-2 px-6 space-y-4 gap-4 mb-16">
        {popular.map((item) => (
          <Menu key={item._id} item={item}></Menu>
        ))}
      </div>
      <Link to={'/ourmenu'}>
      <button   className=" block mx-auto my-4 text-lg group">
            <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
              <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
              <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
              <span className="relative">View Full Menu</span>
            </span>
   
          </button>
      </Link>

    </section>
  );
};

export default MenuItem;
