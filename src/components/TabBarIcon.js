import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';

function TabBarIcon(props) {
   return (
      <Ionicons
         name={props.name}
         size={26}
         style={{ marginBottom: -3, alignSelf: 'center' }}
         color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      />
   );
}
export { TabBarIcon };
