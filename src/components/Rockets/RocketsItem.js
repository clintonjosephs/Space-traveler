/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import PropTypes from 'prop-types';
import styles from './Rockets.module.css';

const RocketsItem = (props) => {
  const {
    id, rocketName, description, flickerImages,
  } = props;
  const clickHandler = () => {
    console.log(flickerImages);
  };
  return (
    <li className={styles.listItems}>

      <img src={flickerImages} alt={rocketName} className={styles.rocketImage} />

      <div className={styles.listWrapper}>
        <h1>{rocketName}</h1>
        <div>
          <span className={styles.badge}>Reserved</span>
          <span className={styles.describe}>{description}</span>
        </div>
        <button type="button" className={styles.reserve} onClick={clickHandler}>
          Reserve Rocket
        </button>
        <button
          type="button"
          id={id}
          className={styles.cancel}
          onClick={clickHandler}
        >
          Cancel Reservation
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
};

export default RocketsItem;
