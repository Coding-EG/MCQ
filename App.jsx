import React from 'react';
import {View, Text, TouchableOpacity, Button, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import Home from './screen/Home';
import Question from './screen/Question';
import Result from './screen/result';

const App = () => {
  return(
     <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name="Home"component={Home} />
        <Stack.Screen name="Question"component={Question} />
          <Stack.Screen name="Result"component={Result} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;