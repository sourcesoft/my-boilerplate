// Actions constants
export const SET_STATUS = 'my-boilerplate/global/SET_STATUS';

export const initialValue = {
  form: false,
};

// Reducer
export default function reducer(state = initialValue, action = {}) {
  switch (action.type) {
    case SET_STATUS:
      return {
        ...state,
        status: action.value,
      };
    // do reducer stuff
    default:
      return state;
  }
}

// Action creators
export function setStatus(value) {
  return { type: SET_STATUS, value };
}
