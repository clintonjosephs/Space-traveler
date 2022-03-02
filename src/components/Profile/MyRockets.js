import PropTypes from 'prop-types';
import { BsFillTrashFill } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import styles from './Profile.module.css';
import { reserveRocket } from '../../redux/rockets/rockets';

const MyRockets = ({ data }) => {
  const dispatch = useDispatch();
  const removeRocketHandler = (id) => {
    dispatch(reserveRocket(id));
  };
  return (
    <ul className={styles['my-journeys']} data-testid="profileRockets">
      <li>
        {' '}
        <h1>My Rockets</h1>
      </li>
      {data.length === 0 ? (
        <li>No rocket reservations yet</li>
      ) : (
        data.map(({ id, rocketName }) => (
          <li key={id}>
            <div className={styles.setItems}>
              <span>{rocketName}</span>
              <BsFillTrashFill onClick={() => removeRocketHandler(id)} role="img" />
            </div>
          </li>
        ))
      )}
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
