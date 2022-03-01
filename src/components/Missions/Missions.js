import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchMissions, {
  toggleMissionSuccesful,
} from '../../redux/missions/missions';
import styles from './Missions.module.css';

let fetched = false;

const Missions = () => {
  const missions = useSelector((state) => state.missionReducer.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!fetched) {
      dispatch(fetchMissions());
      fetched = true;
    }
  }, []);

  const handleClick = (id) => {
    dispatch(toggleMissionSuccesful(id));
  };

  return (
    <table>
      <tbody>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th> </th>
        </tr>
        {missions.map(
          ({
            mission_name: missionName,
            mission_id: missionId,
            description,
            reserved,
          }) => (
            <tr key={missionId}>
              <td className={styles['mission-name']}>{missionName}</td>
              <td className={styles['mission-description']}>{description}</td>
              <td className={styles['mission-status']}>
                {' '}
                <p
                  className={
                    reserved ? styles.reserved : styles['not-reserved']
                  }
                >
                  {reserved ? 'Active Member' : 'NOT A MEMBER'}
                </p>
              </td>
              <td>
                <button
                  id={missionId}
                  onClick={(e) => handleClick(e.target.id)}
                  className={
                    reserved
                      ? styles['mission-joined']
                      : styles['mission-not-joined']
                  }
                  type="button"
                >
                  {reserved ? 'Leave Mission' : 'Join Mission'}
                </button>
              </td>
            </tr>
          ),
        )}
      </tbody>
    </table>
  );
};

export default Missions;
