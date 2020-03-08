import React from 'react'
import { StyleSheet, View, Button, Text, TouchableOpacity } from 'react-native';
import { Navigationcontainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { block } from 'react-native-reanimated';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
          <View style={styles.top}>
            <TouchableOpacity 
              style={[styles.button, styles.TL]}
              onPress={() => navigation.navigate("Screen1")}
            >
              <Text style={styles.buttonText}>Screen 1</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.button, styles.TR]}
              onPress={() => navigation.navigate("Screen2")}
            >
              <Text style={styles.buttonText}>Screen 2</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.bottom}>
            <TouchableOpacity 
              style={[styles.button, styles.BL]}
              onPress={() => navigation.navigate("Screen3")}
            >
              <Text style={styles.buttonText}>Screen 3</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.button, styles.BR]}
              onPress={() => navigation.navigate("Screen4")}
            >
              <Text style={styles.buttonText}>Screen 4</Text>
            </TouchableOpacity>
          </View>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  top: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  bottom: {
    flex: 1,
    flexDirection: 'row',
  },
  button: {
    height: 200,
    width: 200,
    borderStyle: 'solid',
    borderColor: 'blue',
    borderWidth: 10,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  TL: {
    borderTopLeftRadius: 200,
  },
  TR: {
    borderTopRightRadius: 200,
  },
  BL: {
    borderBottomLeftRadius: 200,
  },
  BR: {
    borderBottomRightRadius: 200,
  },
  buttonText: {
    color: 'black',
  },
});

export default HomeScreen;