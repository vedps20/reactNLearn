import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import resList from "../utils/mockData" 
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


  
const Body = () => {

    const [listOfRestaurants, setlistOfRestaurants] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard)

    useEffect(()=>{
        const somedata = fetchData();
    }, []);

    const fetchData = async () =>{
        const resListData = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9394137&lng=77.6952031&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const jsonNewResList = await resListData.json();
        setlistOfRestaurants(jsonNewResList?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(jsonNewResList?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

        console.log(jsonNewResList?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle)
    }

    const onlineStatus = useOnlineStatus();

    if(onlineStatus===false){
        return (
            <h1>Looks like you're offline!!! Please check your internet connection.</h1>
        );
    }
    

    if(listOfRestaurants===undefined || listOfRestaurants===null || listOfRestaurants.length===0){
       return <Shimmer/>;
    }
    
    return (
        <div className="body bg-slate-200">
            <div className="filter flex ">
                <div className="search m-4">
                    <input className="border border-solid border-black rounded-lg" type = "text" value={searchText}  
                    onChange={
                        (e) => {
                            setSearchText(e.target.value);
                        }
                    }/>
                    <button className="border px-4 bg-green-300 border-green-500 m-4 rounded-lg"
                    onClick={
                        () => {
                            const filteredList = listOfRestaurants.filter(
                                (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                            );
                            setFilteredRestaurant(filteredList);
                        }
                    }
                    >Search</button>
                
                </div>

                <button className="px-4 bg-gray-300 m-4 flex items-center rounded-lg" onClick={()=>{
                    const filteredList = listOfRestaurants.filter(
                        (res) => res.info.avgRating > 4
                    );
                    setFilteredRestaurant(filteredList);
                }}>
                    Top Rated Restaurants
                </button>
            </div>
            <div className="flex flex-wrap">
                { 
                    filteredRestaurant.map((restaurant) => (
                    <Link
                        key={restaurant.info.id}
                        to={"/restaurants/" + restaurant.info.id}>
                            {
                                //THIS DOES NOT WORK AS THERE IS NO PROMOTED RESTAURANTS ANYMORE IN SWIGGY.
                            // restaurant.data.promoted ?
                             <RestaurantCardPromoted key={restaurant.info.id} resData={restaurant} /> 
                            // :  <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                            }
                    </Link> 
                    ))
                }
            </div>
        </div>
    );
}

export default Body;