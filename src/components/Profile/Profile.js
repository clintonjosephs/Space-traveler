import { useSelector } from 'react-redux';
import MyMissions from './MyMissions';
import MyRockets from './MyRockets';
import styles from './Profile.module.css';

const Profile = () => {
  const rocketState = useSelector(
    (state) => state.rocketReducer.rockets,
  ).filter((rocket) => rocket.reserved === true);

  const missions = useSelector((state) => state.missionReducer.missions).filter(
    ({ reserved }) => reserved === true,
  );

  return (
    <div className={styles.container}>
      <MyMissions missions={missions} />
      <MyRockets data={rocketState} />
    </div>
  );
};

export default Profile;
