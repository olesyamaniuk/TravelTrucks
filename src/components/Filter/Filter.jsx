import css from "./Filter.module.css";
import { FaTv, FaWind } from "react-icons/fa";
import { BsDiagram3, BsCupHot, BsDroplet, BsGrid1X2, BsGrid3X3Gap } from "react-icons/bs";
import { IoGridOutline } from "react-icons/io5";
import Location from "../Location/Location";
import Button from "../Button/button";

export default function Filter({ filters, onFilterChange, location, onLocationChange }) {
  return (
    <section className={css.container}>
      <Location location={location} onLocationChange={onLocationChange} /> {/* Передаємо локацію і функцію зміни */}
      
      <div className={css.section}>
        <h3 className={css.text}>Filters</h3>
        <p className={css.title}>Vehicle equipment</p>
        <div className={css.filters}>
          {filters.equipment.map((filter, index) => (
            <button
              key={index}
              className={`${css.filter} ${filter.active ? css.active : ""}`} // Активний клас для вибраного фільтра
              onClick={() => onFilterChange("equipment", index)}
            >
              {filter.label === "AC" && <FaWind className={css.icon} />}
              {filter.label === "Automatic" && <BsDiagram3 className={css.icon} />}
              {filter.label === "Kitchen" && <BsCupHot className={css.icon} />}
              {filter.label === "TV" && <FaTv className={css.icon} />}
              {filter.label === "Bathroom" && <BsDroplet className={css.icon} />}
              {filter.label}
            </button>
          ))}
        </div>

        <p className={css.title}>Vehicle type</p>
        <div className={css.filters}>
          {filters.type.map((filter, index) => (
            <button
              key={index}
              className={`${css.filter} ${filter.active ? css.active : ""}`} // Активний клас для вибраного фільтра
              onClick={() => onFilterChange("type", index)}
            >
              {filter.label === "Van" && <BsGrid1X2 className={css.icon} />}
              {filter.label === "Fully Integrated" && <IoGridOutline className={css.icon} />}
              {filter.label === "Alcove" && <BsGrid3X3Gap className={css.icon} />}
              {filter.label}
            </button>
          ))}
        </div>

        <Button text="Search" type="button" />
      </div>
    </section>
  );
}
