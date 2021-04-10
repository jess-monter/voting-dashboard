import { all } from 'redux-saga/effects';
import dashboard from './dashboard';

export default function* rootSaga() {
  yield all([
    ...dashboard,
  ]);
}
