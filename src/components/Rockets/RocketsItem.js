import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import styles from './Rockets.module.css';
import { reserveRocket } from '../../redux/rockets/rockets';

const RocketsItem = (props) => {
  const dispatch = useDispatch();

  const {
    id, rocketName, description, flickerImages, reserved,
  } = props;

  const handleRocketReserve = (rocketId) => {
    dispatch(reserveRocket(rocketId));
  };

  return (
    <li className={styles.listItems}>
      <img
        src={flickerImages}
        alt={rocketName}
        className={styles.rocketImage}
      />

      <div className={styles.listWrapper}>
        <h1>{rocketName}</h1>
        <div>
          <span
            className={styles.badge}
            style={{ display: `${!reserved ? 'none' : 'inline'}` }}
          >
            Reserved
          </span>
          <span className={styles.describe}>{description}</span>
        </div>
        <button
          onClick={() => handleRocketReserve(id)}
          className={
            !reserved ? styles.reserve : styles.cancel
          }
          type="button"
        >
          {!reserved ? 'Reserve Rocket' : 'Cancel Reservation'}
        </button>
      </div>
    </li>
  );
};

RocketsItem.propTypes = {
  id: PropTypes.number.isRequired,
  rocketName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  flickerImages: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default RocketsItem;
