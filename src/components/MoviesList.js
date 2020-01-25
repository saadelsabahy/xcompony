import React, { useState } from 'react';
import { View, Text, FlatList, Dimensions } from 'react-native';
import MovieCard from './MovieCard';
import { EmptyMoviesList } from './EmptyMoviesList';
import { SECOND_COLOR } from '../constants/Colors';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const { height, width } = Dimensions.get('window');
const IMAGES_BASE_URL = 'https://image.tmdb.org/t/p/w500/';

const MoviesList = ({
   data,
   navigation,
   restProps,
   onMoviePress,
   renderMoviesList,
   onFavouritePressed,
   onSharePressed,
}) => {
   return (
      <FlatList
         data={data}
         extraData={renderMoviesList}
         style={{ flex: 1 }}
         contentContainerStyle={{
            flexGrow: 1,
         }}
         keyExtractor={(item, index) => `${item.id + item.title}`}
         renderItem={({
            item,
            item: {
               poster_path,
               id,
               adult,
               media_type,
               title,
               overview,
               vote_average,
               release_date,
               vote_count,
               liked,
            },
            index,
         }) => {
            return (
               <MovieCard
                  onMoviePressed={() => onMoviePress(item)}
                  movieImage={`${IMAGES_BASE_URL}${poster_path}`}
                  movieName={title}
                  rateValue={vote_average}
                  onFavouritePressed={() => onFavouritePressed(item)}
                  onSharePressed={() =>
                     onSharePressed(`${IMAGES_BASE_URL}${poster_path}`)
                  }
                  favouriteIcon={liked ? 'heart' : 'heart-outline'}
                  iconFavouriteColor={
                     liked ? SECOND_COLOR : Colors.cardIconColor
                  }
                  release={release_date}
               />
            );
         }}
         numColumns={3}
         ListEmptyComponent={<EmptyMoviesList noDataText={'no movies yet'} />}
         {...restProps}
      />
   );
};

export { MoviesList };
