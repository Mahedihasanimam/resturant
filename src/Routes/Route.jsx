import {
    createBrowserRouter,
  } from "react-router-dom";
import Mainlayout from "../Layout/Mainlayout";
import Home from "../Pages/Home/Home";
import OurMenu from "../Pages/OurMenu/OurMenu";
import OruShop from "../Pages/Ourshop/OruShop";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";


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
          element:<PrivateRoute><OruShop/></PrivateRoute>
        }

      ]
    },
    {
      path:'/login',
      element:<Login/>
    },
    {
      path:'/registation',
      element:<Register/>
    }
    
  ]);

  export default router