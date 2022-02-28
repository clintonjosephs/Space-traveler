import React from 'react';
import RocketsItem from './RocketsItem';
import styles from './Rockets.module.css';

const Rockets = () => {
  const data = [
    {
      rocketId: 'falcon9',
      rocketName: 'Falcon 9',
      description:
        'Falcon 9 is a two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of satellites and the Dragon spacecraft into orbit.',
      flickrImages:
        'https://farm6.staticflickr.com/5518/31579784413_d853331601_b.jpg',
    },
    {
      rocketId: 'falcon1',
      rocketName: 'Falcon 1',
      description:
        'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.',
      flickr_images: 'https://imgur.com/azYafd8.jpg',
    },
    {
      rocketId: 'falconheavy',
      rocketName: 'Falcon Heavy',
      description:
        'With the ability to lift into orbit over 54 metric tons (119,000 lb)--a mass equivalent to a 737 jetliner loaded with passengers, crew, luggage and fuel--Falcon Heavy can lift more than twice the payload of the next closest operational vehicle, the Delta IV Heavy, at one-third the cost.',
      flickrImages:
        'https://farm5.staticflickr.com/4645/38583830575_3f0f7215e6_b.jpg',
    },
  ];
  return (
    <>
      <ul className={styles.listContainer}>
        {data.map(({
          rocketId, rocketName, description, flickrImages,
        }) => (
          <RocketsItem
            key={rocketId}
            rocketName={rocketName}
            description={description}
            flickerImages={flickrImages}
            rocketId={rocketId}
          />
        ))}
      </ul>
    </>
  );
};

export default Rockets;
