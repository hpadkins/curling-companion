import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './components/HomeScreen';

const Screen1 = () => {
  return (
      <View style={styles.container}>
        <Text>I am Screen 1</Text>
      </View>
  );
};

const Screen2 = () => {
  return (
      <View style={styles.container}>
        <Text>I am Screen 2</Text>
      </View>
  );
};

const Screen3 = () => {
  return (
      <View style={styles.container}>
        <Text>I am Screen 3</Text>
      </View>
  );
};

const Screen4 = () => {
  return (
      <View style={styles.container}>
        <Text>I am Screen 4</Text>
      </View>
  );
};

const Stack = createStackNavigator();

const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Screen1" component={Screen1} />
          <Stack.Screen name="Screen2" component={Screen2} />
          <Stack.Screen name="Screen3" component={Screen3} />
          <Stack.Screen name="Screen4" component={Screen4} />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
