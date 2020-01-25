import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { FONT_COLOR } from '../constants/Colors';

const EmptyMoviesList = ({ noDataText }) => {
   return (
      <View style={styles.container}>
         <View style={styles.iconContainer}>
            <Icon
               name={'video-off-outline'}
               color={FONT_COLOR}
               style={styles.icon}
               size={30}
            />
         </View>
         <View style={styles.textContainer}>
            <Text style={styles.text}>{noDataText}</Text>
         </View>
      </View>
   );
};
const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
   },
   iconContainer: {},
   icon: {},
   textContainer: {
      marginVertical: 10,
   },
   text: {
      color: FONT_COLOR,
      textTransform: 'capitalize',
      letterSpacing: 1.5,
      fontSize: 18,
   },
});

export { EmptyMoviesList };
