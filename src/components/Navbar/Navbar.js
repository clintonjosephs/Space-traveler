import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
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

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toogleMobileMenu = (type = false) => {
    setShowMenu(type);
  };

  return (
    <nav className={styles.container}>
      <div className={styles.topic}>
        <img src={logo} className={styles.logo} alt="travelers site logo" />
        <h1 className={styles.fontR}>Space Travelers&lsquo; Hub</h1>
      </div>
      <ul className={`${!showMenu ? styles.list : styles['menu-overlay']}`}>
        <li
          className={styles.MobileMenu}
          style={{
            float: 'right',
            padding: '20px',
          }}
        >
          <AiOutlineClose
            onClick={() => toogleMobileMenu(false)}
            style={{
              color: 'var(--black)', width: '30px', height: '30px',
            }}
          />
        </li>
        <li className={styles.topic} />
        {links.map(({ id, path, text }) => (
          <li key={id}>
            <NavLink
              to={path}
              className="nav-link"
              style={({ isActive }) => ({
                textDecoration: isActive ? 'underline' : 'none',
                color: 'var(--accent-color)',
              })}
              onClick={() => toogleMobileMenu(false)}
            >
              {text}
            </NavLink>
          </li>
        ))}
      </ul>
      <div>
        <AiOutlineMenu
          className={styles.MobileMenu}
          onClick={() => toogleMobileMenu(true)}
        />
      </div>
    </nav>
  );
};

export default Navbar;
