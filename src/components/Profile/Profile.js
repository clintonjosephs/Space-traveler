import MyMissions from './MyMissions';
import MyRockets from './MyRockets';
import styles from './Profile.module.css';

const Profile = () => (
  <div className={styles.container}>
    <MyMissions />
    <MyRockets />
  </div>
);

export default Profile;
