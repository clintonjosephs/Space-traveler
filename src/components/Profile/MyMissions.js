import PropTypes from 'prop-types';
import { BsFillTrashFill } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { toggleMissionSuccesful } from '../../redux/missions/missions';
import styles from './Profile.module.css';

const MyMissions = ({ missions }) => {
  const dispatch = useDispatch();

  const handleClick = (id) => {
    dispatch(toggleMissionSuccesful(id));
  };

  return (
    <ul className={styles['my-journeys']}>
      <li>
        {' '}
        <h1>My Missions</h1>
      </li>
      {missions.length === 0 ? (
        <li>No Missions joined yet</li>
      ) : (
        missions.map(({ mission_id: missionId, mission_name: missionName }) => (
          <li key={missionId}>
            <div className={styles.setItems}>
              <span>{missionName}</span>
              <BsFillTrashFill onClick={() => handleClick(missionId)} />
            </div>
          </li>
        ))
      )}
    </ul>
  );
};

MyMissions.propTypes = {
  missions: PropTypes.arrayOf(
    PropTypes.shape({
      missionName: PropTypes.string,
      missionId: PropTypes.string,
    }),
  ).isRequired,
};

export default MyMissions;
