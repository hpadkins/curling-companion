import React, { Component }  from 'react'
import styles from "./Styles";
import { View, Text, TouchableOpacity } from 'react-native';
import {
  listenOrientationChange,
  removeOrientationListener
} from 'react-native-responsive-screen';
import Settings from '../Settings/Settings';

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
      </View>
    );
  }
};

export default HomeScreen;
