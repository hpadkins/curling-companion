import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Settings from './components/Settings/Settings';
import { MaterialIcons } from 'react-native-vector-icons';

export default class App extends React.Component {
  render() {
    return <Settings/>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
