import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from './components/HomeScreen/HomeScreen';
import backIcon from "./assets/backIcon.png";

const buttonOverRide = () => ({
  headerBackImage: () => (
    <Image
      style={{ width: 30, height: 30 }}
      source={require("./assets/backIcon.png")}
    />
  )
});

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
        <Stack.Screen
          name="Screen1"
          component={Screen1}
          options={buttonOverRide}
        />
        <Stack.Screen
          name="Screen2"
          component={Screen2}
          options={buttonOverRide}
        />
        <Stack.Screen
          name="Screen3"
          component={Screen3}
          options={buttonOverRide}
        />
        <Stack.Screen
          name="Screen4"
          component={Screen4}
          options={buttonOverRide}
        />
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
