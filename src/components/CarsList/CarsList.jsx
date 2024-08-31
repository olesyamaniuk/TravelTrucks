// import { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { CiMap } from "react-icons/ci";
// import Button from "../Button/button";
// import css from "./CarsList.module.css";
// import { FaWind, FaTv } from "react-icons/fa";
// import { FaRegHeart } from "react-icons/fa";
// import {
//   BsDiagram3,
//   BsCupHot,
//   BsPeople,
//   BsUiRadios,
//   BsDroplet,
// } from "react-icons/bs";
// import { MdLocalGasStation } from "react-icons/md";
// import { TbMicrowave } from "react-icons/tb";
// import { CgSmartHomeRefrigerator } from "react-icons/cg";

// export default function CarList({ cars }) {
//   const location = useLocation();
  
//   // Initialize liked cars state
//   const [likedCars, setLikedCars] = useState({});

//   const handleLikeClick = (carId) => {
//     setLikedCars(prevLikedCars => ({
//       ...prevLikedCars,
//       [carId]: !prevLikedCars[carId]
//     }));
//   };

//   const renderIcon = (key) => {
//     switch (key.toLowerCase()) {
//       case "automatic":
//         return <BsDiagram3 className={css.icon} />;
//       case "ac":
//         return <FaWind className={css.icon} />;
//       case "petrol":
//       case "gas":
//         return <MdLocalGasStation className={css.icon} />;
//       case "kitchen":
//         return <BsCupHot className={css.icon} />;
//       case "radio":
//         return <BsUiRadios className={css.icon} />;
//       case "bathroom":
//       case "water":
//         return <BsDroplet className={css.icon} />;
//       case "2 adults":
//         return <BsPeople className={css.icon} />;
//       case "tv":
//         return <FaTv className={css.icon} />;
//       case "microwave":
//         return <TbMicrowave className={css.icon} />;
//       case "refrigerator":
//         return <CgSmartHomeRefrigerator className={css.icon} />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div>
//       {cars.length > 0 && (
//         <ul className={css.list}>
//           {cars.map((car) => (
//             <li className={css.item} key={car.id}>
//               <img
//                 src={
//                   // car.gallery && car.gallery.length > 0
//                   //   ? car.gallery[0].thumb
//                   //   : defaultImg
//                   car.gallery[0].thumb
//                 }
//                 alt={car.name}
//                 className={css.image}
//               />
//               <div className={css.info}>
//                 <div className={css.header}>
//                   <h2 className={css.name}>{car.name}</h2>
//                   <div className={css.priceLike}>
//                     <p className={css.price}>€{car.price}.00</p>
//                     <button
//                       className={css.like}
//                       onClick={() => handleLikeClick(car.id)}
//                     >
//                     <FaRegHeart className={css.icon} />
//                     </button>
//                   </div>
//                 </div>
//                 <div className={css.infoContainer}>
//                   <p className={css.rating}>
//                     <span className={css.ratingStar}>★</span>
//                     {car.rating} ({car.reviews.length} Reviews)
//                   </p>
//                   <p className={css.location}>
//                     <CiMap />
//                     {car.location}
//                   </p>
//                 </div>
//                 <p className={css.description}>{car.description}</p>
//                 <div className={css.features}>
//                   {Object.keys(car)
//                     .filter(
//                       (key) =>
//                         car[key] === true &&
//                         !["id", "gallery", "rating", "reviews", "description", "price", "name", "location"].includes(key)
//                     )
//                     .map((key) => (
//                       <p key={key} className={css.feature}>
//                         {renderIcon(key)}
//                         {key}
//                       </p>
//                     ))}
//                 </div>
//                 <Link
//                   className={css.navLink}
//                   to={`/catalog/${car.id}`}
//                   state={location}
//                 >
//                   <Button text="Show more" type="button" />
//                 </Link>
//               </div>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { CiMap } from "react-icons/ci";
// import Button from "../Button/button";
import { IoStar } from "react-icons/io5";
import css from "./CarsList.module.css";
import { IoMapOutline } from 'react-icons/io5'; 
import { FaWind, FaTv, FaRegHeart } from "react-icons/fa";

import {
  BsDiagram3,
  BsCupHot,
  BsPeople,
  BsUiRadios,
  BsDroplet,
} from "react-icons/bs";
import { MdLocalGasStation } from "react-icons/md";
import { TbMicrowave } from "react-icons/tb";
import { CgSmartHomeRefrigerator } from "react-icons/cg";

const iconMap = {
  automatic: <BsDiagram3 className={css.icon} />,
  ac: <FaWind className={css.icon} />,
  petrol: <MdLocalGasStation className={css.icon} />,
  gas: <MdLocalGasStation className={css.icon} />,
  kitchen: <BsCupHot className={css.icon} />,
  radio: <BsUiRadios className={css.icon} />,
  bathroom: <BsDroplet className={css.icon} />,
  water: <BsDroplet className={css.icon} />,
  "2 adults": <BsPeople className={css.icon} />,
  tv: <FaTv className={css.icon} />,
  microwave: <TbMicrowave className={css.icon} />,
  refrigerator: <CgSmartHomeRefrigerator className={css.icon} />,
};

export default function CarList({ cars }) {
  const location = useLocation();
  const [likedCars, setLikedCars] = useState({});

  const handleLikeClick = (carId) => {
    setLikedCars((prevLikedCars) => ({
      ...prevLikedCars,
      [carId]: !prevLikedCars[carId],
    }));
  };

  return (
    <div>
      {cars.length > 0 && (
        <ul className={css.list}>
          {cars.map((car) => (
            <li className={css.item} key={car.id}>
              <img
                src={car.gallery?.[0]?.thumb}
                alt={car.name}
                className={css.image}
              />
              <div className={css.info}>
                <div className={css.header}>
                  <h2 className={css.name}>{car.name}</h2>
                  <div className={css.pricike}>
                    <p className={css.price}>€{car.price}.00</p>
                    <button
                      className={css.like}
                      onClick={() => handleLikeClick(car.id)}
                    >
                      <FaRegHeart
                        className={`${css.icon} ${
                          likedCars[car.id] ? css.liked : ""
                        }`}
                      />
                    </button>
                  </div>
                </div>
                <div className={css.information}>
                  <p className={css.rating}>
                  <IoStar className={css.star}/>
                    {car.rating} ({car.reviews.length} Reviews)
                  </p>
                  <p className={css.location}>
                    <IoMapOutline className={css.mapIcon} />
                    {car.location}
                  </p>
                </div>
                <p className={css.description}>{car.description}</p>
                <div className={css.features}>
                  {Object.keys(car)
                    .filter(
                      (key) =>
                        car[key] === true &&
                        !["id", "gallery", "rating", "reviews", "description", "price", "name", "location"].includes(key)
                    )
                    .map((key) => (
                      <p key={key} className={css.feature}>
                        {iconMap[key.toLowerCase()]}
                        {key}
                      </p>
                    ))}
                </div>
                <Link
                  className={css.navLink}
                  to={`/catalog/${car.id}`}
                  state={location}
                >
                  <button className={css.button}>Show more</button>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
