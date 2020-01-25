import {
   GET_CATEGORIES_LOADING,
   GET_MOVIES_CATEGORIES_SUCCESS,
} from '../actions/types';

const INITIAL_STATE = {
   loading: null,
   geners: [],
};

export default (state = INITIAL_STATE, { type, payload }) => {
   switch (type) {
      case GET_CATEGORIES_LOADING:
         return { ...state, loading: payload };
      case GET_MOVIES_CATEGORIES_SUCCESS:
         return { ...state, geners: payload };
      default:
         return state;
   }
};
