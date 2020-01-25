import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { BACKGROUND_COLOR, SECOND_COLOR } from '../constants/Colors';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { connect } from 'react-redux';
import * as Actions from '../store/actions';

class Splash extends Component {
   async componentDidMount() {
      await Promise.all([
         Font.loadAsync({
            ...Ionicons.font,
            ...MaterialCommunityIcons.font,

            'space-mono': require('../../assets/fonts/SpaceMono-Regular.ttf'),
         }),
      ]);
      this.props.navigation.navigate('Main');
   }
   render() {
      return (
         <View style={styles.container}>
            <Text style={styles.text}> XCompany Usability Lab </Text>
         </View>
      );
   }
}
const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: BACKGROUND_COLOR,
   },
   text: {
      color: SECOND_COLOR,
      fontSize: 28,
   },
});
const mapStateToProps = state => ({
   getCtegoriesLoading: state.Categories.loading,
});

export default connect(mapStateToProps, Actions)(Splash);
