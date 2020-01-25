import {
   GET_MOVIES_CATEGORIES_SUCCESS,
   GET_CATEGORIES_LOADING,
   GET_MOVIES_CATEGORIES_FAILD,
} from './types';
import Movies from '../../apis/Movies';

const API_KEY = '228864d8490c0abd15c4d5bfde6f136c';

export const getMoviesCategories = language => async dispatch => {
   try {
      dispatch({ type: GET_CATEGORIES_LOADING, payload: true });
      let categories = await Movies.get(
         `/genre/movie/list?api_key=${API_KEY}&language=${language || 'ar'}`
      );
      const {
         data: { genres },
      } = categories;
      dispatch({ type: GET_MOVIES_CATEGORIES_SUCCESS, payload: genres });
      dispatch({ type: GET_CATEGORIES_LOADING, payload: false });
   } catch (e) {
      dispatch({ type: GET_CATEGORIES_LOADING, payload: false });
      dispatch({ type: GET_MOVIES_CATEGORIES_FAILD });

      console.log(e);
   }
};
