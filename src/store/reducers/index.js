import { combineReducers } from 'redux';
import MoviesList from './MoviesListReducer';
import Categories from './MoviesCategoriesReducer';
import SearchMovies from './SearchMovieReducer';
import Favourite from './FavouriteAndShareReducer';
export default combineReducers({
   MoviesList,
   Categories,
   SearchMovies,
   Favourite,
});
