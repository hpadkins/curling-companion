import React, { Component }  from 'react'
import styles from "./Styles";
import { View, Text, TouchableOpacity } from 'react-native';
import {
  listenOrientationChange,
  removeOrientationListener
} from 'react-native-responsive-screen';
import Settings from '../Settings/Settings';
import PreGameScreen from '../PreGameScreen/PreGameScreen';

class HomeScreen extends Component {

  componentDidMount() {
    listenOrientationChange(this);
  }

  componentWillUnMount() {
    removeOrientationListener();
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Settings/>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Curling Companion</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("PreGameScreen")}
          >
            <Text style={styles.buttonText}>New Game</Text>
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
      </View>
    );
  }
};

export default HomeScreen;
