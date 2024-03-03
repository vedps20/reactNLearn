import { useEffect, useState } from "react";
import { MENU_API } from "./constants";


export const useRestarauntMenu = (resId) =>{

    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async ()=> {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        setResInfo(json.data);
    };

    console.log(resInfo)

    return resInfo;

}


// export default useRestarauntMenu;