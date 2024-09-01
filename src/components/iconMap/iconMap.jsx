import { BsDiagram3, BsCupHot, BsPeople, BsUiRadios, BsDroplet } from "react-icons/bs";
import { MdOutlineMicrowave } from "react-icons/md";
import { LuRefrigerator } from "react-icons/lu";
import { FaWind, FaTv, FaGasPump } from "react-icons/fa";
import css from "./iconMap.module.css"; 

const iconMap = {
  automatic: <BsDiagram3 className={css.icon} />,
  ac: <FaWind className={css.icon} />,
  petrol: <FaGasPump className={css.icon} />,
  gas: <FaGasPump className={css.icon} />,
  kitchen: <BsCupHot className={css.icon} />,
  radio: <BsUiRadios className={css.icon} />,
  bathroom: <BsDroplet className={css.icon} />,
  water: <BsDroplet className={css.icon} />,
  "2 adults": <BsPeople className={css.icon} />,
  tv: <FaTv className={css.icon} />,
  microwave: <MdOutlineMicrowave className={css.icon} />,
  refrigerator: <LuRefrigerator className={css.icon} />,
};

export default iconMap;


