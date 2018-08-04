import { toast } from 'react-toastify';

export const Types = {
  ADD_REQUEST: 'users/ADD_REQUEST',
  ADD_SUCCESS: 'users/ADD_SUCCESS',
  ADD_FAILURE: 'users/ADD_FAILURE',
  REMOVE_REQUEST: 'users/REMOVE_REQUEST',
  OPEN_MODAL: 'users/OPEN_MODAL',
  CLOSE_MODAL: 'users/CLOSE_MODAL',
};

const INITIAL_STATE = {
  data: [],
  loading: false,
  errorOnAdd: null,
  modalOpen: false,
};

export default function users(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.OPEN_MODAL:
      return {
        ...state,
        modalOpen: true,
        coordinates: action.payload.coordinates,
      };
    case Types.CLOSE_MODAL:
      return {
        ...state,
        modalOpen: false,
        coordinates: [],
      };
    case Types.ADD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Types.ADD_SUCCESS:
      return {
        data: [...state.data, action.payload.user],
        loading: false,
        errorOnAdd: null,
        modalOpen: false,
      };
    case Types.ADD_FAILURE:
      return {
        ...state,
        errorOnAdd: action.payload.message,
        loading: false,
      };
    case Types.REMOVE_REQUEST:
      toast('Usuário removido com sucesso', { type: 'success' });
      return {
        ...state,
        errorOnAdd: null,
        loading: false,
        data: state.data.filter(user => user.login !== action.payload.user)
      };
    default:
      return state;
  }
}

export const Creators = {
  openModalRequest: coordinates => ({
    type: Types.OPEN_MODAL,
    payload: {
      modalOpen: true,
      coordinates,
    },
  }),
  closeModalRequest: () => ({
    type: Types.CLOSE_MODAL,
    payload: {
      modalOpen: false,
    },
  }),
  addUserRequest: userName => ({
    type: Types.ADD_REQUEST,
    payload: {
      userName,
    },
  }),

  addUserSuccess: user => ({
    type: Types.ADD_SUCCESS,
    payload: {
      user,
    },
  }),

  addUserError: message => ({
    type: Types.ADD_FAILURE,
    payload: {
      message,
    },
  }),
  removeUserRequest: user => ({
    type: Types.REMOVE_REQUEST,
    payload: {
      user,
    },
  }),
};
