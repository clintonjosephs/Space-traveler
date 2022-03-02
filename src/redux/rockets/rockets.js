// action types
const FETCH_ROCKETS = 'SPACETRAVELER/ROCKETS/FETCH';
const TOOGLE_RESERVE = 'SPACETRAVELER/ROCKETS/RESERVE';

// initial state
const initialState = { rockets: [] };

// synchronous actions
export const fetchRockets = (payload) => ({
  type: FETCH_ROCKETS,
  payload,
});

export const reserveRocket = (payload) => ({
  type: TOOGLE_RESERVE,
  payload,
});

// reducers
const rocketReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_ROCKETS:
      return { rockets: [...payload] };
    case TOOGLE_RESERVE:
      return {
        ...state,
        rockets: state.rockets.map((rocket) => {
          if (rocket.id !== payload) return rocket;
          return { ...rocket, reserved: !rocket.reserved };
        }),
      };
    default:
      return state;
  }
};

export default rocketReducer;
