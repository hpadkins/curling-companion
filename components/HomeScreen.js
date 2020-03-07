import React from 'react'
import { StyleSheet, View, Button, Text, TouchableOpacity } from 'react-native';
import { Navigationcontainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { block } from 'react-native-reanimated';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
          <TouchableOpacity 
            style={styles.button}
            onPress={() => navigation.navigate("Screen1")}
          >
            <Text style={styles.buttonText}>Screen 1</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.button}
            onPress={() => navigation.navigate("Screen2")}
          >
            <Text style={styles.buttonText}>Screen 2</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.button}
            onPress={() => navigation.navigate("Screen3")}
          >
            <Text style={styles.buttonText}>Screen 3</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.button}
            onPress={() => navigation.navigate("Screen4")}
          >
            <Text style={styles.buttonText}>Screen 4</Text>
          </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // button: {
  //   borderRadius: '50%',
  //   width: 40,
  //   height: 40,
  //   transform: [{ rotate: '45deg' }],
  //   borderWidth: 20,
  //   borderStyle: 'solid',
  //   borderColor: 'red green blue yellow',
  //   margin: 10,
  // },
  // buttonText: {
  //   color: '#fff',
  // },
});

export default HomeScreen;