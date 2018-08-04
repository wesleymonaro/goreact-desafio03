import { all, takeLatest } from 'redux-saga/effects';

import { Types as UserTypes } from '../ducks/users';

import { addUserRequest } from './users';

export default function* rootSaga() {
  return yield all([
    takeLatest(UserTypes.ADD_REQUEST, addUserRequest),
  ]);
}
