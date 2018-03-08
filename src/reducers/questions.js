import * as types from '../constants';

const questions = (state = {}, action) => {
  switch (action.type) {
    case types.REQUEST_QUESTIONS:
      return Object.assign({}, state, {
        isFetching: true
      });
    case types.RECEIVE_QUESTIONS:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.items
      });
    default:
      return state;
  }
};

export default questions;
