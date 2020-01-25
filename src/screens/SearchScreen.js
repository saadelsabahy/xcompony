import React, { Component } from 'react';
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native';
import { SearchInput, MoviesList } from '../components';
import {
   BACKGROUND_COLOR,
   BORDER_COLOR,
   SECOND_COLOR,
   FONT_COLOR,
} from '../constants/Colors';
import { connect } from 'react-redux';
import * as Actions from '../store/actions';
import { sharePoster } from '../helpers/helpers';

class Search extends Component {
   fetchMore = async () => {
      const { page, searchValue } = this.props;
      await this.props.increasePage(page);
      this.props.fetchMore(searchValue, page);
   };
   componentWillUnmount() {
      this.props.searchInputChange('');
   }
   shouldComponentUpdate(nextProps, nextState) {
      if (nextProps !== this.props) {
         return true;
      }
      return false;
   }
   onMoviePressed = async item => {
      const { id } = item;
      await this.props.saveRecentViewed(id);
      await this.props.getViewsById(id);
      this.props.navigation.navigate('movieDetails', { movieItem: item });
   };
   onFavouritePressed = item => {
      item['liked'] = !item['liked'];
      this.props.handleFavourite(item);
   };
   onSharePressed = imageSource => {
      sharePoster(imageSource);
   };
   render() {
      const {
         navigation,
         inputValue,
         searchData,
         searchLoading,
         page,
         renderMoviesList,
      } = this.props;
      console.log('searched', searchLoading, page);

      return (
         <View style={styles.container}>
            <SearchInput
               placeholder={'search'}
               value={inputValue}
               onSearchInputChange={text =>
                  this.props.searchInputChange(text, page)
               }
               showRightLoading={searchLoading}
               onLeftIconPressed={() => navigation.goBack()}
               searchBarContainerStyle={styles.searchBarContainerStyle}
            />
            {!searchData.length ? (
               <View style={styles.beforSearchTextContainer}>
                  <Text style={styles.beforSearchText}>
                     search the movie you want
                  </Text>
               </View>
            ) : (
               <MoviesList
                  data={searchData}
                  navigation={navigation}
                  renderMoviesList={renderMoviesList}
                  restProps={{
                     onEndReachedThreshold: 1,
                     onEndReached: () => this.fetchMore(),
                     ListFooterComponent: searchLoading ? (
                        <View style={styles.footerComponentContainer}>
                           <ActivityIndicator
                              color={SECOND_COLOR}
                              size="large"
                              animating
                           />
                        </View>
                     ) : null,
                  }}
                  onMoviePress={item => this.onMoviePressed(item)}
                  onFavouritePressed={this.onFavouritePressed}
                  onSharePressed={this.onSharePressed}
               />
            )}
         </View>
      );
   }
}
export const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: BACKGROUND_COLOR,
   },
   searchBarContainerStyle: {
      width: '95%',
      borderBottomColor: BORDER_COLOR,
   },
   footerComponentContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
   },
   beforSearchTextContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
   },
   beforSearchText: {
      color: FONT_COLOR,
      fontSize: 18,
      letterSpacing: 1.5,
      textTransform: 'capitalize',
      marginBottom: 40,
   },
});
const mapStateToProps = state => ({
   searchValue: state.SearchMovies.inputValue,
   searchLoading: state.SearchMovies.loading,
   searchData: state.SearchMovies.searchMovieData,
   page: state.SearchMovies.page,
   renderMoviesList: state.Favourite.renderMovieList,
});
export default connect(mapStateToProps, Actions)(Search);
