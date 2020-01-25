import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import * as Actions from '../store/actions';
import { styles } from './SearchScreen';
import { MoviesList } from '../components';
import { sharePoster } from '../helpers/helpers';

class FavouritesScreen extends Component {
   onFavouritePressed = item => {
      item['liked'] = !item['liked'];
      this.props.handleFavourite(item);
   };
   onSharePressed = imageSource => {
      sharePoster(imageSource);
   };
   render() {
      const { likedMovies, navigation, renderMoviesList } = this.props;
      return (
         <View style={styles.container}>
            {!likedMovies.length ? (
               <View style={styles.beforSearchTextContainer}>
                  <Text style={styles.beforSearchText}>no favourites yet</Text>
               </View>
            ) : (
               <MoviesList
                  data={likedMovies}
                  navigation={navigation}
                  renderMoviesList={renderMoviesList}
                  onMoviePress={item => this.onMoviePressed(item)}
                  onFavouritePressed={this.onFavouritePressed}
                  onSharePressed={this.onSharePressed}
               />
            )}
         </View>
      );
   }
}

const mapStateToProps = state => ({
   renderMoviesList: state.Favourite.renderMovieList,
   likedMovies: state.Favourite.likedMovies,
});

export default connect(mapStateToProps, Actions)(FavouritesScreen);
