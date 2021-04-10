import * as constants from '../constants/actionTypes';

const initialState = {
    data: {},
};

const events = (state = initialState, action) => {
    switch (action.type) {
    case constants.GET_DATA_SUCCESS:
        return {
            ...state,
            data: action.response,
            };
    case constants.GET_DATA_FAILED:
        return {
            ...state,
            data: action.response,
            };
      default:
        return state;
    }
  };
  
export default events;