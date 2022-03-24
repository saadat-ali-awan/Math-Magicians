import { NavLink } from 'react-router-dom';
import styles from './NavMenu.module.css';

const NavMenu = () => (
  <header className={styles.header}>
    <h1>Math Magicians</h1>
    <ul>
      <NavLink
        to="/"
        className={({ isActive }) => `${styles['nav-link']} ${(isActive ? styles.selected : '')}`}
      >
        Home
      </NavLink>
      |
      <NavLink
        to="/calculator"
        className={({ isActive }) => `${styles['nav-link']} ${(isActive ? styles.selected : '')}`}
      >
        Calculator
      </NavLink>
      |
      <NavLink
        to="/quote"
        className={({ isActive }) => `${styles['nav-link']} ${(isActive ? styles.selected : '')}`}
      >
        Quote
      </NavLink>
    </ul>
  </header>
);

export default NavMenu;
