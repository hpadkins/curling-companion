import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./components/HomeScreen/HomeScreen";
import StartGame from "./components/StartGame/StartGame";
import backIcon from "./assets/backIcon.png";

import TestShotTracking from "./components/TestShotTracking/TestShotTracking";

import PreGameScreen from "./components/PreGameScreen/PreGameScreen";

const buttonOverRide = () => ({
  headerBackImage: () => <Image style={styles.backButton} source={backIcon} />
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
          name="PreGameScreen"
          component={PreGameScreen}
          options={buttonOverRide}
        />
        <Stack.Screen
          name="StartGame"
          component={StartGame}
          options={buttonOverRide}
        />
        /*
        <Stack.Screen
          name="TestShotTracking"
          component={TestShotTracking}
          options={buttonOverRide}
        />
        */
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
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  backButton: {
    width: 30,
    height: 30,
    marginLeft: wp("1%"),
    marginRight: wp("1%")
  }
});

export default App;
