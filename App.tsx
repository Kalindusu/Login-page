

import React from 'react';
import type {PropsWithChildren} from 'react';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Icon } from '@rneui/themed';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';
import { NavigationContainer } from '@react-navigation/native';
import Appnavigation from './src/Appnavigation';
import 'react-native-gesture-handler';




function App(): React.JSX.Element {
  
  return (
   <View style={styles.Container}>
    <Appnavigation/>
{/*<LoginScreen/>*/}
{/*<SignupScreen/>*/}
   </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor:'white',
  }
 
});

export default App;
