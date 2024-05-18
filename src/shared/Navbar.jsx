import { Link } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";
// className={({ isActive}) =>
//                       isActive? "text-yellow-500 bg-red-600": ""
//                     }
import { FaUserCircle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user)
  const navitem = (
    <>
      <li className="font-bold">
        <Link to={"/"}>Home</Link>
      </li>
      <li className="font-bold">
        <Link to={"/contact us"}>contact us</Link>
      </li>
      <li className="font-bold">
        <Link to={"/dashbord"}>dashbord</Link>
      </li>
      <li className="font-bold">
        <Link to={"/ourmenu"}>our menu</Link>
      </li>

      <li className="font-bold">
        <Link to={"/ourshop"}>our shop </Link>
      </li>
      <li className="font-bold bg-green-500 text-white rounded-full bg-opacity-30">
        <Link to={"/our shop"}>
          <TiShoppingCart size={25} />
        </Link>
      </li>
    </>
  );
  const handleLogout = () => {
    logOut();
  };
  return (
    <>
      <div className="navbar bg-black bg-opacity-30 max-w-[1920px] text-white fixed z-40">
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navitem}
            </ul>
          </div>
          <Link className=" btn-ghost lg:text-4xl md:text-2xl textxl font-bold">
            <p>Kutumbari</p>
            <p className="text-xs let lg:tracking-[1.2em] md:tracking-[.30em] tracking-[.15em] font-bold">
              Restaurant
            </p>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu  menu-horizontal">{navitem}</ul>
        </div>
        <div className="navbar-end  px-4 ">
          {user ? (
            <div className="flex items-center justify-center gap-4">
              <button className="font-bold">
                <Link onClick={handleLogout}>Logout</Link>
              </button>
              <div className="avatar">
                <div className="w-12 ">
                  <img className="rounded-full" src={user?.photoURL} />
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center gap-2">
              <button className="font-bold">
                <Link to={"/login"}>Login</Link>
              </button>
              <FaUserCircle size={25} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
