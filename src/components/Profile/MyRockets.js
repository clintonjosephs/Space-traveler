import PropTypes from 'prop-types';
import { BsFillTrashFill } from 'react-icons/bs';
import styles from './Profile.module.css';

const MyRockets = ({ data }) => {
  const removeRocketHandler = (id) => {
    console.log(id);
  };
  return (
    <ul className={styles['my-journeys']}>
      <li>
        {' '}
        <h1>My Rockets</h1>
      </li>
      {data.length === 0 ? <li>No rocket reservations yet</li> : data.map(({ id, rocketName }) => (
        <li key={id}>
          <div className={styles.setItems}>
            <span>{rocketName}</span>
            <BsFillTrashFill onClick={() => removeRocketHandler(id)} />
          </div>
        </li>
      ))}
    </ul>
  );
};

MyRockets.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      rocketName: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      reserved: PropTypes.bool.isRequired,
    }),
  ).isRequired,
};

export default MyRockets;
