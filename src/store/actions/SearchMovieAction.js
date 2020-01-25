import {
   SEARCH_IMPUT_CHANGE,
   SEARCH_LOADING,
   SEARCH_MOVIE_SUCCESS,
   SEARCH_MOVIE_FAILD,
   INCREASE_PAGE,
   EMPTY_SEARCH_DATA,
} from './types';
import Movies from '../../apis/Movies';
const API_KEY = '228864d8490c0abd15c4d5bfde6f136c';

export const searchInputChange = (inputText, page, language) => (
   dispatch,
   getState
) => {
   dispatch({ type: SEARCH_IMPUT_CHANGE, payload: inputText });
   if (inputText === '') {
      dispatch({ type: EMPTY_SEARCH_DATA });
   } else {
      searchMovie({ dispatch, getState }, inputText, page, language);
   }
};

const searchMovie = async (
   { dispatch, getState },
   searchText,
   page,
   language
) => {
   const { searchMovieData } = getState().SearchMovies;

   try {
      dispatch({ type: SEARCH_LOADING, payload: true });
      let searchResult = await Movies.get(
         `search/movie?api_key=${API_KEY}&language=${language ||
            'ar'}-US&query=${searchText}&page=${page || 1}&include_adult=false`
      );

      const {
         data: { results },
      } = searchResult;

      dispatch({
         type: SEARCH_MOVIE_SUCCESS,
         payload: !searchMovieData.length
            ? results
            : [...searchMovieData, ...results],
      });
      dispatch({ type: SEARCH_LOADING, payload: false });
   } catch (e) {
      dispatch({ type: SEARCH_LOADING, payload: false });
      dispatch({ type: SEARCH_MOVIE_FAILD });

      console.log(e);
   }
};

export const increasePage = page => {
   return {
      type: INCREASE_PAGE,
      payload: page + 1,
   };
};

export const fetchMore = (searchText, page, language) => async (
   dispatch,
   getState
) => {
   console.log(page);

   searchMovie({ dispatch, getState }, searchText, page, language);
};
