import {
   SEARCH_IMPUT_CHANGE,
   SEARCH_LOADING,
   SEARCH_MOVIE_SUCCESS,
   INCREASE_PAGE,
   EMPTY_SEARCH_DATA,
} from '../actions/types';

const INITIAL_STATE = {
   inputValue: '',
   searchMovieData: [],
   loading: null,
   page: 1,
};

export default (state = INITIAL_STATE, { type, payload }) => {
   switch (type) {
      case SEARCH_IMPUT_CHANGE:
         return { ...state, inputValue: payload };
      case SEARCH_LOADING:
         return { ...state, loading: payload };
      case SEARCH_MOVIE_SUCCESS:
         return { ...state, searchMovieData: payload };
      case EMPTY_SEARCH_DATA:
         return { ...INITIAL_STATE };
      case INCREASE_PAGE:
         return { ...state, page: payload };
      default:
         return state;
   }
};
