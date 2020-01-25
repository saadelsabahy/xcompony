if (__DEV__) {
   import('./ReactotronConfig').then(() =>
      console.log('Reactotron Configured')
   );
}
import React, { useState, useEffect } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import { store, persistor } from './src/store/store';
import { PersistGate } from 'redux-persist/integration/react';
import AppNavigator from './src/navigation/AppNavigator';
import { BACKGROUND_COLOR } from './src/constants/Colors';

export default function App(props) {
   return (
      <Provider store={store}>
         <PersistGate persistor={persistor}>
            <View style={styles.container}>
               <StatusBar
                  backgroundColor={'#000'}
                  barStyle="light-content"
                  translucent={true}
               />
               <AppNavigator />
            </View>
         </PersistGate>
      </Provider>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: BACKGROUND_COLOR,
      paddingTop: StatusBar.currentHeight,
   },
});
