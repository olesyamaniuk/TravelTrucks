
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCarById } from "../../../api";
import css from "./Reviews.module.css";
import Form from "../Form/form";
import Loader from "../../components/Loader/Loader";
import { IoStar, IoStarOutline } from "react-icons/io5";

export default function Reviews() {
  const { carsId } = useParams();
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchCar() {
      try {
        const data = await getCarById(carsId);
        setCar(data.reviews);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchCar();
  }, [carsId]);

  if (loading) {
    return (
      <div className={css.container}>
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className={css.container}>
        <p className={css.error}>Oops! Something went wrong. Please try again later.</p>
      </div>
    );
  }

  if (!car || car.length === 0) {
    return (
      <div className={css.container}>
        <p>No Reviews.</p>
      </div>
    );
  }

  return (
    <div className={css.box}>
      <div className={css.container}>
        <ul className={css.reviewList}>
          {car.map((review) => (
            <li key={review.id} className={css.review}>
              <div className={css.authorContainer}>
                <div className={css.avatar}>
                  {review.reviewer_name[0].toUpperCase()}
                </div>
                <div className={css.details}>
                  <p className={css.author}>{review.reviewer_name}</p>
                  <p className={css.rating}>
                    {Array.from({ length: review.reviewer_rating }).map((_, index) => (
                      <IoStar key={`star-${review.id}-${index}`} className={css.star} />
                    ))}
                    {Array.from({ length: 5 - review.reviewer_rating }).map((_, index) => (
                      <IoStarOutline key={`star-outline-${review.id}-${index}`} className={css.star} />
                    ))}
                  </p>
                </div>
              </div>
              <p className={css.comment}>{review.comment}</p>
            </li>
          ))}
        </ul>
      </div>
      <Form />
    </div>
  );
}

