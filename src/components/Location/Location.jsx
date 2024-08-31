import { IoMapOutline } from 'react-icons/io5'; 
import css from './Location.module.css'; 

export default function Location({ location }) {
  return (
    <div className={css.section}>
      <h3 className={css.text}>Location</h3>
      <input
        className={css.input}
        type="text"
        placeholder="Kyiv, Ukraine"
        value={location}
      />
      <IoMapOutline className={css.mapIcon} />
    </div>
  );
}
