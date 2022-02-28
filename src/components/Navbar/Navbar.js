import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';
import logo from '../../images/logo.png';

const links = [
  {
    id: 1,
    path: '/',
    text: 'Rockets',
  },
  {
    id: 2,
    path: '/missions',
    text: 'Missions',
  },
  {
    id: 3,
    path: '/profile',
    text: 'My Profile',
  },
];

const Navbar = () => (
  <nav className={styles.container}>
    <ul className={styles.list}>
      <li className={styles.topic}>
        <img src={logo} className={styles.logo} alt="travelers site logo" />
        <h1 style={{ fontSize: '2.1rem' }}>Space Travelers&lsquo; Hub</h1>
      </li>
      {links.map(({ id, path, text }) => (
        <li key={id}>
          <NavLink
            to={path}
            className="nav-link"
            style={({ isActive }) => ({
              textDecoration: isActive ? 'underline' : 'none',
              color: 'var(--accent-color)',
            })}
          >
            {text}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navbar;
