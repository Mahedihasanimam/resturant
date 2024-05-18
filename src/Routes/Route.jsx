import {
    createBrowserRouter,
  } from "react-router-dom";
import Mainlayout from "../Layout/Mainlayout";
import Home from "../Pages/Home/Home";
import OurMenu from "../Pages/OurMenu/OurMenu";
import OruShop from "../Pages/Ourshop/OruShop";
import Login from "../Pages/Login/Login";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout/>,
      children:[
        {
            path:'/',
            element:<Home/>
        },
        {
          path:'ourmenu',
          element:<OurMenu/>
        },
        {
          path:'ourshop',
          element:<OruShop/>
        }

      ]
    },
    {
      path:'/login',
      element:<Login/>
    }
    
  ]);

  export default router