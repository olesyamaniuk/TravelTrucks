
// import { IoMapOutline } from 'react-icons/io5';
// import css from './Location.module.css';

// export default function Location({ location, onLocationChange }) {
//   const handleChange = (e) => {
//     onLocationChange(e.target.value);
//   };

//   return (
//     <div className={css.section}>
//       <h3 className={css.text}>Location</h3>
//       <div className={css.inputWrapper}>
//         <input
//           className={css.input}
//           type="text"
//           placeholder="Kyiv, Ukraine"
//           value={location}
//           onChange={handleChange}
//         />
//         <IoMapOutline className={css.mapIcon} />
//       </div>
//     </div>
//   );
// }


import { useState } from 'react';
import { IoMapOutline } from 'react-icons/io5';
import css from './Location.module.css';

export default function Location({ location, onLocationChange }) {
  const [isFocused, setIsFocused] = useState(false);
  const [placeholder, setPlaceholder] = useState("Kyiv, Ukraine");

  const handleFocus = () => {
    setPlaceholder(""); // Очищає placeholder при фокусі
    setIsFocused(true);
  };

  const handleBlur = () => {
    if (!location) {
      setPlaceholder("Kyiv, Ukraine"); // Відновлює placeholder, якщо поле порожнє
    }
    setIsFocused(false);
  };

  const handleChange = (e) => {
    onLocationChange(e.target.value);
  };

  return (
    <div className={`${css.section} ${isFocused ? css.sectionFocused : ''}`}>
      <h3 className={css.text}>Location</h3>
      <div className={css.inputWrapper}>
        <input
          className={css.input}
          type="text"
          placeholder={placeholder}
          value={location}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        <IoMapOutline className={css.mapIcon} />
      </div>
    </div>
  );
}
