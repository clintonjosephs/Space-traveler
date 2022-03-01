const FETCH_MISSIONS_REQUEST = 'FETCH_MISSIONS_REQUEST';
const FETCH_MISSIONS_SUCCESSFUL = 'FETCH_MISSIONS_SUCCESSFUL';
const FETCH_MISSIONS_FAILURE = 'FETCH_MISSIONS_FAILURE';
const JOIN_MISSION_SUCCESSFUL = 'JOIN_MISSION_SUCCESSFUL';

const fetchMissionsRequest = () => ({
  type: FETCH_MISSIONS_REQUEST,
});

const fetchMissionsSuccess = (missions) => ({
  type: FETCH_MISSIONS_SUCCESSFUL,
  payload: missions,
});

const fetchMissionsFailure = (error) => ({
  type: FETCH_MISSIONS_FAILURE,
  payload: error,
});

export const joinMissionSuccesful = (id) => ({
  type: JOIN_MISSION_SUCCESSFUL,
  payload: id,
});

const initialMissionState = {
  loading: false,
  missions: [],
  error: '',
};

export const missionReducer = (state = initialMissionState, action) => {
  switch (action.type) {
    case FETCH_MISSIONS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_MISSIONS_SUCCESSFUL:
      return {
        ...state,
        loading: false,
        missions: action.payload,
        error: '',
      };

    case FETCH_MISSIONS_FAILURE:
      return {
        ...state,
        loading: false,
        missions: [],
        error: action.payload,
      };

    case JOIN_MISSION_SUCCESSFUL:
      return {
        ...state,
        loading: false,
        missions: state.missions.map((mission) => {
          if (mission.mission_id !== action.payload) return mission;
          return { ...mission, reserved: true };
        }),
        error: '',
      };

    default:
      return state;
  }
};

const fetchMissions = () => async (dispatch) => {
  dispatch(fetchMissionsRequest());
  const request = await fetch('https://api.spacexdata.com/v3/missions');
  try {
    const missions = await request.json();
    dispatch(fetchMissionsSuccess(missions));
  } catch (error) {
    const errorMsg = error.message;
    dispatch(fetchMissionsFailure(errorMsg));
  }
};

export default fetchMissions;
