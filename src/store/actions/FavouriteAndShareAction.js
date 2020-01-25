import {
   ADD_TO_FAVOURITES,
   REMOVE_FROM_FAVOURITES,
   RENDER_MOVIES_LIST,
} from './types';
import * as Sharing from 'expo-sharing';
import * as FileSystem from 'expo-file-system';

export const handleFavourite = favouriteItem => (dispatch, getState) => {
   console.log(getState().Favourite);

   const { likedMovies, renderMovieList } = getState().Favourite;
   dispatch({ type: RENDER_MOVIES_LIST });
   if (!likedMovies.length) {
      dispatch({
         type: ADD_TO_FAVOURITES,
         payload: [{ ...favouriteItem }],
      });
   } else {
      let likedIndex = likedMovies.findIndex(
         item => item.id == favouriteItem.id
      );

      if (likedIndex > -1) {
         likedMovies.splice(likedIndex, 1);
         dispatch({ type: REMOVE_FROM_FAVOURITES, payload: likedMovies });
      } else {
         dispatch({
            type: ADD_TO_FAVOURITES,
            payload: [...likedMovies, { ...favouriteItem }],
         });
      }
   }
};
