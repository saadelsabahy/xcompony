import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Colors, {
   BACKGROUND_COLOR,
   FONT_COLOR,
   MOVIE_CARD_COLOR,
} from '../constants/Colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const MovieCard = ({
   movieImage,
   iconRteColor,
   onMoviePressed,
   movieName,
   rateValue,
   onFavouritePressed,
   onSharePressed,
   iconFavouriteColor,
   iconShareColor,
   favouriteIcon,
   release,
}) => {
   return (
      <View style={styles.container}>
         <View style={styles.imageContainer}>
            <Image
               style={styles.image}
               source={{
                  uri: movieImage,
               }}
            />
         </View>
         <View style={styles.detailsContainer}>
            <Text style={styles.movieName}>{movieName} </Text>
            <View style={styles.rateContainer}>
               <Icon name={'star'} size={17} color={iconRteColor || '#ff0'} />
               <Text style={styles.rateNumber}>{rateValue}</Text>
            </View>
            <Text style={styles.movieName}>{`${release}`}</Text>
            <View style={styles.likeAndShareContainer}>
               <TouchableOpacity
                  onPress={onFavouritePressed}
                  activeOpacity={0.95}>
                  <Icon
                     name={favouriteIcon}
                     size={25}
                     color={iconFavouriteColor || Colors.cardIconColor}
                  />
               </TouchableOpacity>
               <TouchableOpacity onPress={onSharePressed} activeOpacity={0.95}>
                  <Icon
                     name={'share-variant'}
                     size={25}
                     color={iconShareColor || Colors.cardIconColor}
                  />
               </TouchableOpacity>
            </View>
         </View>
      </View>
   );
};
const styles = StyleSheet.create({
   container: {
      width: 112,
      backgroundColor: BACKGROUND_COLOR,
      marginHorizontal: 4,
      marginVertical: 10,
   },
   imageContainer: {
      height: 190,
      width: '100%',
      backgroundColor: MOVIE_CARD_COLOR,
   },
   image: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
   },
   detailsContainer: {
      width: '100%',
      height: 100,
      justifyContent: 'space-evenly',
      backgroundColor: MOVIE_CARD_COLOR,
      paddingHorizontal: 5,
   },

   movieName: {
      fontSize: 17,
      color: FONT_COLOR,
      textTransform: 'capitalize',
   },
   rateContainer: {
      flexDirection: 'row',
      alignItems: 'center',
   },
   rateNumber: {
      color: FONT_COLOR,
   },
   likeAndShareContainer: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
   },
});
export default MovieCard;
