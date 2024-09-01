import { useEffect, useState } from "react";
import { useParams, NavLink, Outlet } from "react-router-dom";
import { IoStar, IoMapOutline } from "react-icons/io5";
import { getCarById } from "../../../api";
import css from "./DetailsPage.module.css";
import Loader from "../../components/Loader/Loader";

export default function DetailsPage() {
  const { carsId } = useParams();
  const [car, setCar] = useState(null);

  useEffect(() => {
    async function fetchCar() {
      try {
        const data = await getCarById(carsId);
        setCar(data);
      } catch (error) {
        console.error("Failed to fetch car data:", error);
      }
    }
    fetchCar();
  }, [carsId]);

  const classLink = ({ isActive }) => (isActive ? css.active : css.link);

  return (
    <div className={css.container}>
      {car ? (
        <div className={css.detail}>
          <h2 className={css.name}>{car.name}</h2>
          <div className={css.info}>
              <p className={css.rating}>
                <IoStar className={css.star} />
                {car.rating} ({car.reviews.length} Reviews)
              </p>
            <p className={css.location}>
              <IoMapOutline className={css.mapIcon} />
              {car.location}
            </p>
          </div>
          <p className={css.price}>€{car.price}.00</p>
          {car.gallery && car.gallery.length > 0 ? (
            <ul className={css.gallery}>
              {car.gallery.map((image, index) => (
                <li key={index} className={css.galleryItem}>
                  <img
                    src={image.thumb}
                    alt={`Gallery image ${index + 1}`}
                    className={css.galleryImage}
                  />
                </li>
              ))}
            </ul>
          ) : (
            <p>No images</p>
          )}
          <p className={css.description}>{car.description}</p>
        </div>
      ) : (
        <Loader />
      )}
      <div className={css.add}>
        <ul className={css.addList}>
          <li className={css.addItem}>
            <NavLink to="features" className={classLink}>
              Features
            </NavLink>
          </li>
          <li className={css.addItem}>
            <NavLink to="reviews" className={classLink}>
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
}
