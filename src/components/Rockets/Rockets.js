import React from 'react';
import { useSelector } from 'react-redux';
import RocketsItem from './RocketsItem';
import styles from './Rockets.module.css';

const Rockets = () => {
  const data = useSelector((state) => state.rocketReducer.rockets);

  if (data.length === 0) {
    return (
      <>
        <ul className={styles.listContainer}>
          <li className={styles.listItems} style={{ padding: '2rem' }}><h1>No rockets available</h1></li>
        </ul>
      </>
    );
  }
  return (
    <>
      <ul className={styles.listContainer}>
        {data.map(({
          id, rocketName, description, flickrImages,
        }) => (
          <RocketsItem
            key={id}
            rocketName={rocketName}
            description={description}
            flickerImages={flickrImages}
            id={id}
          />
        ))}
      </ul>
    </>
  );
};

export default Rockets;
