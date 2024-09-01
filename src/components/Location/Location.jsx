import { IoMapOutline } from 'react-icons/io5'; 
import css from './Location.module.css'; 

export default function Location({ location, onLocationChange }) {
  const handleChange = (e) => {
    onLocationChange(e.target.value);
  };

  return (
    <div className={css.section}>
      <h3 className={css.text}>Location</h3>
      <div className={css.inputWrapper}>
        <input
          className={css.input}
          type="text"
          placeholder="Kyiv, Ukraine"
          value={location}
          onChange={handleChange}
        />
        <IoMapOutline className={css.mapIcon} />
      </div>
    </div>
  );
}


