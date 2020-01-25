import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { HEADER_COLOR, FONT_COLOR } from '../constants/Colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Header = ({
   title,
   iconLeft,
   iconLeftColor,
   iconLeftStyle,
   onIconLeftPressed,
   iconRight,
   onIconRightPressed,
   iconRightColor,
   iconRightName,
   containerStyle,
}) => {
   return (
      <View style={styles.container}>
         <View style={styles.iconLeftContainer}>
            {iconLeft && (
               <TouchableOpacity onPress={onIconLeftPressed}>
                  <Icon
                     name={iconLeft || 'keyboard-backspace'}
                     color="#fff"
                     style={[styles.iconLeft]}
                     size={20}
                  />
               </TouchableOpacity>
            )}
         </View>

         <View style={styles.textContainer}>
            <Text style={[styles.text]}>{title}</Text>
         </View>
         <View style={styles.iconRightContainer}>
            {iconRight && (
               <TouchableOpacity onPress={onIconRightPressed}>
                  <Icon
                     name={iconRight}
                     color="#fff"
                     style={[styles.iconRight]}
                     size={20}
                  />
               </TouchableOpacity>
            )}
         </View>
      </View>
   );
};
const styles = StyleSheet.create({
   container: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      width: '100%',
      height: 50,
      backgroundColor: HEADER_COLOR,
   },
   textContainer: {
      flex: 0.8,
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
   },
   text: {
      color: FONT_COLOR,
      textTransform: 'capitalize',
      letterSpacing: 1.4,
   },
   iconLeftContainer: {
      flex: 0.1,
      height: '100%',
      justifyContent: 'center',
   },
   iconLeft: {
      marginHorizontal: 7,
   },
   iconRightContainer: {
      flex: 0.1,
      justifyContent: 'center',
      height: '100%',
   },
   iconRight: {
      marginHorizontal: 7,
   },
});

export { Header };
