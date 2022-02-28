import { NavLink } from 'react-router-dom';

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
    text: 'Profile',
  },
];

const Navbar = () => (
  <nav>
    <ul>
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
