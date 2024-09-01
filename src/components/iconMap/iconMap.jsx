import { BsDiagram3, BsCupHot, BsPeople, BsUiRadios, BsDroplet } from "react-icons/bs";
import { MdLocalGasStation } from "react-icons/md";
import { TbMicrowave } from "react-icons/tb";
import { CgSmartHomeRefrigerator } from "react-icons/cg";
import { FaWind, FaTv } from "react-icons/fa";
import css from "./iconMap.module.css"; 

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

export default iconMap;


