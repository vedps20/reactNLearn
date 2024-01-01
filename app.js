import React from "react";
import ReactDOM  from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

/**
 * Food ordering App
 * 
 * Header
 * - Logo
 * - Nav Items
 * 
 * Body
 * - Search bar and button
 * - Restaurant Container
 *   - Restaurant Card
 *     - image
 *     - name
 *     - star rating
 *     - cuisine
 *     -  delivery time
 * 
 * Footer
 * - Copyright
 * - Links
 * - Address
 * - Contact
 * 
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="data:image/png;base64,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">
        </img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
}

const RestaurantCard = (props) => {
  const {resData} = props;
  return (
    <div className="res-card">
      <img
       className="res-logo" 
       alt="res-img"
       src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData.info.cloudinaryImageId}></img>
      <h3>{resData.info.name}</h3>
      <h4>{resData.info.cuisines.join(", ")}</h4>
      <h4>{resData.info.avgRating}</h4>
      <h4>{resData.info.deliveryTime}</h4>
    </div>
  );
}

const resList = [
  {
    "info": {
      "id": "18976",
      "name": "Nandhana Palace",
      "cloudinaryImageId": "195876a3181ef63f76e45e3a7b49b585",
      "locality": "Marathahalli",
      "areaName": "Marathahalli",
      "costForTwo": "₹500 for two",
      "cuisines": [
        "Biryani",
        "Andhra",
        "South Indian",
        "North Indian"
      ],
      "avgRating": 4.2,
      "parentId": "2120",
      "avgRatingString": "4.2",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 20,
        "lastMileTravel": 1.3,
        "serviceability": "SERVICEABLE",
        "slaString": "20 mins",
        "lastMileTravelString": "1.3 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-01-02 02:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹120 OFF",
        "subHeader": "ABOVE ₹199",
        "discountTag": "FLAT DEAL"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      "context": "seo-data-5dcab077-a918-4d70-9468-80de6838710e"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/nandhana-palace-marathahalli-bangalore-18976",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "551489",
      "name": "Bakingo",
      "cloudinaryImageId": "0c53fd8f62e3d25ba56d1b4cfe572cef",
      "locality": "Kaverappa Layout",
      "areaName": "Kadubeesanahalli",
      "costForTwo": "₹299 for two",
      "cuisines": [
        "Bakery",
        "Desserts",
        "Beverages",
        "Snacks"
      ],
      "avgRating": 4.4,
      "parentId": "3818",
      "avgRatingString": "4.4",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 30,
        "lastMileTravel": 5,
        "serviceability": "SERVICEABLE",
        "slaString": "30 mins",
        "lastMileTravelString": "5.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-01-02 00:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹120 OFF",
        "subHeader": "ABOVE ₹199",
        "discountTag": "FLAT DEAL"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      "context": "seo-data-5dcab077-a918-4d70-9468-80de6838710e"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/bakingo-kaverappa-layout-kadubeesanahalli-bangalore-551489",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "740737",
      "name": "Pizza Hut",
      "cloudinaryImageId": "490629b70f89da8a5b93fc199ece335e",
      "locality": "Mahadevapura",
      "areaName": "Panathur",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Pizzas"
      ],
      "avgRating": 4,
      "parentId": "721",
      "avgRatingString": "4.0",
      "totalRatingsString": "100+",
      "sla": {
        "deliveryTime": 25,
        "lastMileTravel": 0.5,
        "serviceability": "SERVICEABLE",
        "slaString": "25 mins",
        "lastMileTravelString": "0.5 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-01-01 23:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹179"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "isNewlyOnboarded": true,
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      "context": "seo-data-5dcab077-a918-4d70-9468-80de6838710e"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/pizza-hut-mahadevapura-panathur-bangalore-740737",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "736494",
      "name": "KFC",
      "cloudinaryImageId": "f01666ac73626461d7455d9c24005cd4",
      "locality": "Panathur",
      "areaName": "Mahadevapura",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Burgers",
        "Biryani",
        "American",
        "Snacks",
        "Fast Food"
      ],
      "avgRating": 4.2,
      "parentId": "547",
      "avgRatingString": "4.2",
      "totalRatingsString": "500+",
      "sla": {
        "deliveryTime": 17,
        "lastMileTravel": 0.5,
        "serviceability": "SERVICEABLE",
        "slaString": "17 mins",
        "lastMileTravelString": "0.5 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-01-01 23:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹120 OFF",
        "subHeader": "ABOVE ₹199",
        "discountTag": "FLAT DEAL"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "isNewlyOnboarded": true,
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      "context": "seo-data-5dcab077-a918-4d70-9468-80de6838710e"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/kfc-panathur-mahadevapura-bangalore-736494",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "424658",
      "name": "Asha Tiffins",
      "cloudinaryImageId": "hpncnz3sfv3gigsukkts",
      "locality": "B Block",
      "areaName": "Aecs Layout",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "South Indian",
        "North Indian",
        "Chinese",
        "Beverages",
        "Desserts"
      ],
      "avgRating": 4.4,
      "veg": true,
      "parentId": "236243",
      "avgRatingString": "4.4",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 26,
        "lastMileTravel": 5,
        "serviceability": "SERVICEABLE",
        "slaString": "26 mins",
        "lastMileTravelString": "5.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-01-01 23:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹120 OFF",
        "subHeader": "ABOVE ₹199",
        "discountTag": "FLAT DEAL"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      "context": "seo-data-5dcab077-a918-4d70-9468-80de6838710e"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/asha-tiffins-b-block-aecs-layout-bangalore-424658",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "363",
      "name": "Meghana Foods",
      "cloudinaryImageId": "yfyo8aklppbwdplv7ofp",
      "locality": "Marathahalli",
      "areaName": "Marathahalli",
      "costForTwo": "₹500 for two",
      "cuisines": [
        "Biryani",
        "Andhra",
        "South Indian",
        "Chinese",
        "Seafood"
      ],
      "avgRating": 4.3,
      "parentId": "635",
      "avgRatingString": "4.3",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 18,
        "lastMileTravel": 1.3,
        "serviceability": "SERVICEABLE",
        "slaString": "18 mins",
        "lastMileTravelString": "1.3 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-01-02 01:30:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹120 OFF",
        "subHeader": "ABOVE ₹199",
        "discountTag": "FLAT DEAL"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      "context": "seo-data-5dcab077-a918-4d70-9468-80de6838710e"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/meghana-foods-marathahalli-bangalore-363",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "622020",
      "name": "MOJO Pizza - 2X Toppings",
      "cloudinaryImageId": "59b64f9bb67234987652437f21d379c2",
      "locality": "Devarabisanahalli",
      "areaName": "Kadabeesanahalli",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "Pizzas",
        "Italian",
        "Fast Food",
        "Desserts"
      ],
      "avgRating": 4.5,
      "parentId": "11329",
      "avgRatingString": "4.5",
      "totalRatingsString": "100+",
      "sla": {
        "deliveryTime": 23,
        "lastMileTravel": 6,
        "serviceability": "SERVICEABLE",
        "slaString": "18-28 mins",
        "lastMileTravelString": "6.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-01-02 02:00:00",
        "opened": true
      },
      "badges": {
        "textExtendedBadges": [
          {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "options available",
            "fontColor": "#7E808C"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "fontColor": "#7E808C",
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹120 OFF",
        "subHeader": "ABOVE ₹199",
        "discountTag": "FLAT DEAL"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      "context": "seo-data-5dcab077-a918-4d70-9468-80de6838710e"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/mojo-pizza-2x-toppings-devarabisanahalli-kadabeesanahalli-bangalore-622020",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "382650",
      "name": "Wendy's Burgers",
      "cloudinaryImageId": "a2ec5418246b622ec4baa3bd051ef6ab",
      "locality": "Harlur Main Road",
      "areaName": "Bellandur Sarjapur",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Burgers",
        "American",
        "Fast Food",
        "Snacks",
        "Beverages"
      ],
      "avgRating": 4.1,
      "parentId": "972",
      "avgRatingString": "4.1",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 32,
        "lastMileTravel": 5,
        "serviceability": "SERVICEABLE",
        "slaString": "32 mins",
        "lastMileTravelString": "5.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-01-01 23:59:00",
        "opened": true
      },
      "badges": {
        "textExtendedBadges": [
          {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "options available",
            "fontColor": "#7E808C"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "fontColor": "#7E808C",
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹120 OFF",
        "subHeader": "ABOVE ₹199",
        "discountTag": "FLAT DEAL"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      "context": "seo-data-5dcab077-a918-4d70-9468-80de6838710e"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/wendys-burgers-harlur-main-road-bellandur-sarjapur-bangalore-382650",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "23690",
      "name": "McDonald's",
      "cloudinaryImageId": "bb7ae131544c7d37e10fc5faf76f09d6",
      "locality": "ORR Central Mall",
      "areaName": "Bellandur",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Burgers",
        "Beverages",
        "Cafe",
        "Desserts"
      ],
      "avgRating": 4.3,
      "parentId": "630",
      "avgRatingString": "4.3",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 21,
        "lastMileTravel": 2.8,
        "serviceability": "SERVICEABLE",
        "slaString": "21 mins",
        "lastMileTravelString": "2.8 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-01-02 04:45:00",
        "opened": true
      },
      "badges": {
        "textExtendedBadges": [
          {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "options available",
            "fontColor": "#7E808C"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "fontColor": "#7E808C",
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹120 OFF",
        "subHeader": "ABOVE ₹199",
        "discountTag": "FLAT DEAL"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      "context": "seo-data-5dcab077-a918-4d70-9468-80de6838710e"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/mcdonalds-orr-central-mall-bellandur-bangalore-23690",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  }
];

console.log(resList[0]);
const Body = () => {
  return (
    <div className="body">
      <div className="Search">Search</div>
      <div className="res-container">
        { resList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
         ))
         }

      </div>
    </div>
  );
}

const AppLayout = () => {
  return (
    <div className="app">
      <Header/>
      <Body/>
    </div>
  );
};

root.render(<AppLayout/>);