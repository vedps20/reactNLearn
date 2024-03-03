import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import { useRestarauntMenu } from "../utils/useRestarauntMenu";

const RestaurantMenu = () => {

    const {resId} = useParams();

    const [resInfo, setResInfo] = useRestarauntMenu(resId);
    
    if(resInfo===null){
        return <Shimmer />;
    }

    const {name, cuisines, cloudinaryImageId, costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;

    const {itemCards} = resInfo?.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;

    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")}</p>
            <h3>{costForTwoMessage}</h3>
            <ul>
                {
                    itemCards.map((item) => (
                    <li key={item.card.info.id}>{item.card.info.name} -- ₹{item.card.info.price/100} </li>
                ))}
            </ul>
 
        </div>
    );
};


export default RestaurantMenu;

