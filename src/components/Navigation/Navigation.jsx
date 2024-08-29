import { NavLink } from 'react-router-dom';
import sprite from '../../pictures/sprite.svg';
import clsx from 'clsx';
import css from './Navigation.module.css';

const NavigationClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function Navigation() {
  return (
    <div className={css.container}>
      <NavLink to="/" className={css.navLink}>
        <svg className={css.icon}>
          <use href={`${sprite}#TravelTrucks`}></use>
        </svg>
      </NavLink>
      <nav className={css.nav}>
        <NavLink to="/" className={NavigationClass}>
          Home
        </NavLink>
        <NavLink to="/catalog" className={NavigationClass}>
          Catalog
        </NavLink>
      </nav>
    </div>
  );
}