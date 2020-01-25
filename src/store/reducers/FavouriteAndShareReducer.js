import {
   ADD_TO_FAVOURITES,
   REMOVE_FROM_FAVOURITES,
   RENDER_MOVIES_LIST,
} from '../actions/types';

const INITIAL_STATE = {
   likedMovies: [],
   renderMovieList: false,
};

export default (state = INITIAL_STATE, { type, payload }) => {
   switch (type) {
      case RENDER_MOVIES_LIST:
         return { ...state, renderMovieList: !state.renderMovieList };
      case REMOVE_FROM_FAVOURITES:
         return {
            ...state,
            likedMovies: payload,
         };
      case ADD_TO_FAVOURITES:
         return {
            ...state,
            likedMovies: payload,
         };
      default:
         return state;
   }
};
