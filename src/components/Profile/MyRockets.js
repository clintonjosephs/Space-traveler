import styles from './Profile.module.css';

const MyRockets = () => (
  <>
    {' '}
    <ul className={styles['my-journeys']}>
      <li>
        {' '}
        <h1>My Rockets</h1>
      </li>
      <li>Falcon 9</li>
      <li>Falcon Heavy</li>
      <li>Starship</li>
    </ul>
  </>
);
export default MyRockets;
