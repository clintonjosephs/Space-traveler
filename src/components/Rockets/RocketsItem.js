import React from 'react';
import PropTypes from 'prop-types';
import styles from './Rockets.module.css';

const RocketsItem = (props) => {
  const {
    rocketId, rocketName, description, flickerImages,
  } = props;
  const clickHandler = () => {
    console.log(rocketId);
  };
  return (
    <li className={styles.listItems}>
      <img src={flickerImages} alt={rocketName} />
      <div className={styles.listWrapper}>
        <h2>{rocketName}</h2>
        <div>{description}</div>
        <button type="button" onClick={clickHandler}>
          Reservation
        </button>
      </div>
    </li>
  );
};

RocketsItem.propTypes = {
  rocketId: PropTypes.string.isRequired,
  rocketName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  flickerImages: PropTypes.string.isRequired,
};

export default RocketsItem;
