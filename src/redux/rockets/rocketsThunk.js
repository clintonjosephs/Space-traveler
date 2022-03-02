import { fetchRockets } from './rockets';

// asynchronous actions
const fetchRocketThunk = () => async (dispatch) => {
  try {
    const response = await fetch('https://api.spacexdata.com/v3/rockets').then(
      (data) => data.json(),
    );
    const payload = response.map((rocket) => ({
      id: rocket.id,
      rocketName: rocket.rocket_name,
      description: rocket.description,
      reserved: false,
      flickrImages: rocket.flickr_images[Math.floor((Math.random() * rocket.flickr_images.length))],
    }));

    dispatch(fetchRockets(payload));
  } catch (err) {
    throw new Error(err);
  }
};

export default fetchRocketThunk;
