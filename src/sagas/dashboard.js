import {call, put, takeLatest} from 'redux-saga/effects';
import request from '../utils/request';
import * as constants from '../constants/actionTypes';


function* getDataSaga() {
  try {
    const requestURL = `https://279cf7c8a66a.ngrok.io/surveys/surveys/1/`;
    const response = yield call(request, requestURL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response) {
      yield put({
          type: constants.GET_DATA_SUCCESS,
          response,
      });
    }
  } catch (error) {
    yield put({
      type: constants.GET_DATA_FAILED,
    });
  }
}

const dashboardSagas = [
  takeLatest(constants.GET_DATA_INIT, getDataSaga),
];

export default dashboardSagas;