import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData" 
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import {Link} from "react-router-dom";


  
const Body = () => {

    const [listOfRestaurants, setlistOfRestaurants] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(()=>{
        fetchData();
    }, []);

    const fetchData = async () =>{
        const resListData = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9394137&lng=77.6952031&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const jsonNewResList = await resListData.json();
        setlistOfRestaurants(jsonNewResList?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(jsonNewResList?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    }

    if(listOfRestaurants===undefined || listOfRestaurants===null || listOfRestaurants.length===0){
       return <Shimmer/>;
    }
    
    return (
        <div className="body">
        <div className="filter">
            <div className="search">
                <input className="search-box" type = "text" value={searchText}  
                   onChange={
                    (e) => {
                        setSearchText(e.target.value);
                    }
                 }/>
                <button
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

            <button className="filter-btn" onClick={()=>{
                const filteredList = listOfRestaurants.filter(
                    (res) => res.info.avgRating > 4
                );
                setFilteredRestaurant(filteredList);
            }}>
                Top Rated Restaurants
            </button>
        </div>
        <div className="res-container">
            { 
                filteredRestaurant.map((restaurant) => (
                   <Link
                    key={restaurant.info.id}
                    to={"/restaurants/" + restaurant.info.id}>
                        <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                   </Link> 
                ))
            }
        </div>
        </div>
    );
}

export default Body;