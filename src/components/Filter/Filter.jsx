import css from "./Filter.module.css";
import Button from "../Button/button";
import Location from "../Location/Location";
import { IoGridOutline } from "react-icons/io5";
import { FaTv, FaWind } from "react-icons/fa";
import {
  BsDiagram3,
  BsCupHot,
  BsGrid1X2,
  BsGrid3X3Gap,
  BsDroplet,
} from "react-icons/bs";

export default function Filter({ filters, onFilterChange, location, onLocationChange  }) {
  return (
    <section className={css.container}>
      <Location location={location} onLocationChange={onLocationChange} />

      <div className={css.section}>
        <h3 className={css.text}>Filters</h3>
        <p className={css.title}>Vehicle equipment</p>
        <div className={css.filters}>
          {filters.equipment.map((filter, index) => (
            <button
              key={index}
              className={`${css.filter}`}
              onClick={() => onFilterChange("equipment", index)}
            >
              {filter.label === "AC" && <FaWind className={css.icon} />}
              {filter.label === "Automatic" && (<BsDiagram3 className={css.icon} />)}
              {filter.label === "Kitchen" && <BsCupHot className={css.icon} />}
              {filter.label === "TV" && <FaTv className={css.icon} />}
              {filter.label === "Bathroom" && (<BsDroplet className={css.icon} />)}
              {filter.label}
            </button>
          ))}
        </div>

        <p className={css.title}>Vehicle type</p>
        <div className={css.filters}>
          {filters.type.map((filter, index) => (
            <button
              key={index}
              className={`${css.filter} `}
              onClick={() => onFilterChange("type", index)}
            >
              {filter.label === "Van" && <BsGrid1X2 className={css.icon} />}
              {filter.label === "Fully Integrated" && (<IoGridOutline className={css.icon} />)}
              {filter.label === "Alcove" && (<BsGrid3X3Gap className={css.icon} />)}
              {filter.label}
            </button>
          ))}
        </div>

        <Button text="Search" type="button"></Button>
      </div>
    </section>
  );
}
