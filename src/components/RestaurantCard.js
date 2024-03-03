import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props;

    return (
        <div className="m-4 p-4 w-[18rem] h-[32rem] rounded-lg bg-gray-300 min-h-8">
            <img
                className="rounded-lg" 
                alt="res-img"
                src={CDN_URL + resData.info.cloudinaryImageId}></img>
            <h3 className="font-bold py-4 text-lg">{resData.info.name}</h3>
            <h4>{resData.info.cuisines.join(", ")}</h4>
            <h4 className="font-bold py-4" >{resData.info.avgRating}</h4>
            <h4>{resData.info.deliveryTime}</h4>
        </div>
    );
}


export const withPromotedLabel = (RestaurantCard) =>{
    return (props)=>{
        return (
            <div>
                <label
                  className="absolute bg-black text-white m-2 p-2 rounded-xl"
                >Promoted
                </label>
                <RestaurantCard {...props}/>
            </div>
        );
    };
}

export default RestaurantCard;