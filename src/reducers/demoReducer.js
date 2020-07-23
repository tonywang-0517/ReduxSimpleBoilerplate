import { IS_LOADED } from '../constants/demoConstants';

const initialState = {
  isLoaded: false,
};

export default function demoReducer(state = initialState, action) {
  switch (action.type) {
    case IS_LOADED: {
      return initialState;
    }
    default: {
      return state;
    }
  }
}
