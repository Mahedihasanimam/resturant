import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";


const Mainlayout = () => {
    return (
        <div className="max-w-[1920px] mx-auto font-cinzel">
            {/* nav bar  */}
            <Navbar/>
            {/* outelate  */}
            <Outlet/>
            {/* footer  */}
            <Footer/>
        </div>
    );
};

export default Mainlayout;