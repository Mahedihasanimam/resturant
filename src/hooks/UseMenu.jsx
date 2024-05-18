import axios from "axios";
import { useEffect, useState } from "react";
const UseMenu=()=>{
    const [menu, setmenu] = useState([]);
    const [loading,setloading]=useState(true)
 
    useEffect(() => {
      const menuitem = async () => {
        const { data } = await axios(`${import.meta.env.VITE_API_URL}/menu`);
        setloading(false)
        setmenu(data);
      };
      menuitem();
    }, []);

    return [menu,loading]
}

export default UseMenu;