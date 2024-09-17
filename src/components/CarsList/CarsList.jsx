// import { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { IoStar } from 'react-icons/io5';
// import { IoMapOutline } from 'react-icons/io5';
// import { FaRegHeart } from 'react-icons/fa';
// import iconMap from '../iconMap/iconMap.jsx';
// import css from './CarsList.module.css';

// export default function CarList({ cars }) {
//   const location = useLocation();
//   const [likedCars, setLikedCars] = useState({});

//   useEffect(() => {
//     const savedLikedCars = localStorage.getItem('likedCars');
//     if (savedLikedCars) {
//       setLikedCars(JSON.parse(savedLikedCars));
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('likedCars', JSON.stringify(likedCars));
//   }, [likedCars]);

//   const handleLikeClick = (carId) => {
//     setLikedCars((prevLikedCars) => ({
//       ...prevLikedCars,
//       [carId]: !prevLikedCars[carId],
//     }));
//   };

//   return (
//     <div>
//       {cars.length > 0 && (
//         <ul className={css.list}>
//           {cars.map((car, index) => (
//             <li className={css.item} key={`${car.id}-${index}`}>
//               <img
//                 src={car.gallery?.[0]?.thumb}
//                 alt={car.name}
//                 className={css.image}
//               />
//               <div className={css.info}>
//                 <div className={css.header}>
//                   <h2 className={css.name}>{car.name}</h2>
//                   <div className={css.pricike}>
//                     <p className={css.price}>€{car.price}.00</p>
//                     <button
//                       className={css.like}
//                       onClick={() => handleLikeClick(car.id)}
//                     >
//                       <FaRegHeart
//                         className={`${css.icon} ${likedCars[car.id] ? css.liked : ""}`}
//                       />
//                     </button>
//                   </div>
//                 </div>
//                 <div className={css.information}>
//                   <p className={css.rating}>
//                     <IoStar className={css.star} />
//                     {car.rating} ({car.reviews.length} Reviews)
//                   </p>
//                   <p className={css.location}>
//                     <IoMapOutline className={css.mapIcon} />
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
//                         {iconMap[key.toLowerCase()]}
//                         {key}
//                       </p>
//                     ))}
//                 </div>
//                 <Link
//                   className={css.navLink}
//                   to={`/catalog/${car.id}`}
//                   state={location}
//                 >
//                   <button className={css.button}>Show more</button>
//                 </Link>
//               </div>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }


import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IoStar } from 'react-icons/io5';
import { IoMapOutline } from 'react-icons/io5';
import { FaRegHeart } from 'react-icons/fa';
import iconMap from '../iconMap/iconMap.jsx';
import css from './CarsList.module.css';

export default function CarList({ cars }) {
  const location = useLocation();
  const [likedCars, setLikedCars] = useState({});

  useEffect(() => {
    const savedLikedCars = localStorage.getItem('likedCars');
    if (savedLikedCars) {
      setLikedCars(JSON.parse(savedLikedCars));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('likedCars', JSON.stringify(likedCars));
  }, [likedCars]);

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
                src={car.gallery?.[0]?.thumb || 'default-image-url'}
                alt={`Image of ${car.name}`}
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
                        className={`${css.icon} ${likedCars[car.id] ? css.liked : ""}`}
                      />
                    </button>
                  </div>
                </div>
                <div className={css.information}>
                  <p className={css.rating}>
                    <IoStar className={css.star} />
                    {car.rating} ({car.reviews?.length || 0} Reviews)
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
