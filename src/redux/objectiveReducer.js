import {ADD_OBJECTIVE, ADD_URL, ADD_IMAGE} from './actions';

const initialState = {
  webUrl: null,
  image: null,
  objective: null,
};

const objctiveReducer = (state = initialState, actions) => {
  const {type, payload} = actions;

  switch (type) {
    case ADD_OBJECTIVE:
      return Object.assign({}, state, {objective: payload});
    case ADD_IMAGE:
      return Object.assign({}, state, {image: payload});
    case ADD_URL:
      return Object.assign({}, state, {webUrl: payload});
  }
};

export default objctiveReducer;
