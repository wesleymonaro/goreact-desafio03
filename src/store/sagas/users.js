import { call, put, select } from 'redux-saga/effects';
import api from '../../services/api';
import { toast } from 'react-toastify';
import { Creators as UserActions } from '../ducks/users';


export function* addUserRequest(action) {
  try {
    const response = yield call(api.get, `/users/${action.payload.userName}`);

    const userData = response.data;

    const coordinates = yield select(state => state.users.coordinates);

    const newUser = {
      login: userData.login,
      name: userData.name,
      bio: userData.bio,
      avatar: userData.avatar_url,
      coordinates: {
        lat: coordinates[0],
        lon: coordinates[1],
      },
    };

    const users = yield select(state => state.users.data);

    if (users.find(user => user.login === newUser.login)) {
      toast('Usuário duplicado', {type: 'error'});
      yield put(UserActions.addUserError('Usuário duplicado'));
    } else {
      toast('Usuário adicionado com sucesso', {type: 'success'});
      yield put(UserActions.addUserSuccess(newUser));
    }
  } catch (error) {
    yield put(UserActions.addUserError('Usuário não existe'));
    toast('Usuário não existe', {type: 'error'});
  }
}
