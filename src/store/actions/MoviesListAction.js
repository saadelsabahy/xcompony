import {
   GET_MOVIES_List_SUCCESS,
   GET_MOVIES_List_FAILD,
   GET_MOVIES_List_LOADING,
} from './types';
import Movies from '../../apis/Movies';

const API_KEY = '228864d8490c0abd15c4d5bfde6f136c';

export const getMoviesList = (categoryId, language) => async dispatch => {
   try {
      dispatch({ type: GET_MOVIES_List_LOADING, payload: true });
      let movies = await Movies.get(
         `/list/${categoryId}?api_key=${API_KEY}&language=${language || 'ar'}`
      );
      const { data } = movies;
      dispatch({ type: GET_MOVIES_List_SUCCESS, payload: data });
      dispatch({ type: GET_MOVIES_List_LOADING, payload: false });
   } catch (e) {
      dispatch({ type: GET_MOVIES_List_LOADING, payload: false });
      dispatch({ type: GET_MOVIES_List_FAILD });

      console.log(e);
   }
};
