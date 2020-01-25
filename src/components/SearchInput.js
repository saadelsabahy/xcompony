import React from 'react';
import { View, TextInput, StyleSheet, ActivityIndicator } from 'react-native';
import { PLACEHOLDER_COLOR, SECOND_COLOR } from '../constants/Colors';
import IconButton from './IconButton';
const SearchInput = ({
   placeholder,
   value,
   onSearchInputChange,
   placeholderTextColor,
   showLeftIcon,
   leftIconColor,
   searchBarContainerStyle,
   leftIconStyle,
   leftIconName,
   onLeftIconPressed,
   leftIconContainerStyle,
   inputStyle,
   showRightIcon,
   onRightIconPressed,
   rightIconName,
   rightIconColor,
   rightIconContainerStyle,
   rightIconStyle,
   rightloadingContainerStyle,
   showRightLoading,
   indicatorSize,
   indicatorColor,
   inputProps,
}) => {
   return (
      <View style={[styles.container, searchBarContainerStyle]}>
         {showLeftIcon && (
            <IconButton
               onIconPressed={onLeftIconPressed}
               iconName={leftIconName || 'keyboard-backspace'}
               iconColor={leftIconColor || PLACEHOLDER_COLOR}
               iconStyle={leftIconStyle}
               iconContainerStyle={leftIconContainerStyle}
            />
         )}
         <TextInput
            placeholder={placeholder}
            value={value}
            onChangeText={onSearchInputChange}
            style={[styles.textInput, inputStyle]}
            placeholderTextColor={placeholderTextColor || PLACEHOLDER_COLOR}
            {...inputProps}
         />
         {showRightIcon && (
            <IconButton
               onIconPressed={onRightIconPressed}
               iconName={rightIconName || 'close'}
               iconColor={rightIconColor || PLACEHOLDER_COLOR}
               iconStyle={rightIconStyle}
               iconContainerStyle={rightIconContainerStyle}
            />
         )}
         {showRightLoading && (
            <View
               style={[
                  styles.indicatorContainerStyle,
                  rightloadingContainerStyle,
               ]}>
               <ActivityIndicator
                  size={indicatorSize || 'small'}
                  color={indicatorColor || SECOND_COLOR}
               />
            </View>
         )}
      </View>
   );
};
const styles = StyleSheet.create({
   container: {
      flexDirection: 'row',
      backgroundColor: '#444',
      width: '90%',
      height: 50,
      alignSelf: 'center',
      borderRadius: 4,
      marginVertical: 10,
   },

   textInput: {
      flex: 1,
      marginHorizontal: 5,
      fontSize: 17,
      letterSpacing: 1,
      fontWeight: '400',
      color: '#fff',
      textTransform: 'capitalize',
   },
   indicatorContainerStyle: {
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: 10,
   },
});
export { SearchInput };
