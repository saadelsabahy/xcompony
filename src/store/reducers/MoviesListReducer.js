import {
   GET_MOVIES_List_SUCCESS,
   GET_MOVIES_List_LOADING,
} from '../actions/types';

const INITIAL_STATE = {
   loading: null,
   movies: {},
};

export default (state = INITIAL_STATE, { type, payload }) => {
   switch (type) {
      case GET_MOVIES_List_SUCCESS:
         return { ...state, movies: payload };
      case GET_MOVIES_List_LOADING:
         return { ...state, loading: payload };
      default:
         return state;
   }
};
