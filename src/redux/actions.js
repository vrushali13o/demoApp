export const ADD_OBJECTIVE = 'ADD_OBJECTIVE';
export const ADD_IMAGE = 'ADD_IMAGE';
export const ADD_URL = 'ADD_URL';

export const addObjective = objective => {
  return {type: ADD_OBJECTIVE, payload: objective};
};

export const addImage = image => {
  return {type: ADD_IMAGE, payload: image};
};

export const addUrl = url => {
  return {type: ADD_URL, payload: url};
};
