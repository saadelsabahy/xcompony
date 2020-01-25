import React from 'react';
import { Text } from 'react-native';

function MonoText(props) {
   return (
      <Text {...props} style={[props.style, { fontFamily: 'space-mono' }]} />
   );
}
export { MonoText };
