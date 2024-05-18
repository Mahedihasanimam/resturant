import { Link } from "react-router-dom";
import Menu from "./menitem/Menu";


const CoverMenu = ({offer}) => {
    return (
        <div>
            <div className="grid lg:grid-cols-2 px-6 space-y-4 gap-4 mb-16 my-20 container mx-auto">
        {offer.map((item) => (
          <Menu key={item._id} item={item}></Menu>
        ))}
      </div>
      <div className="card-actions justify-center my-8">
      <Link to={'/ourshop'}>
        <button className="btn flex-col  bg-[#f9e6b928] hover:bg-[#f9e6b928] text-[#BB8506] border-b-4 border-solid border-[#BB8506] hover:border-[#BB8506] btn-primary">
              Order your fevorite Food
            </button>
        </Link>
      </div>
        </div>
    );
};

export default CoverMenu;