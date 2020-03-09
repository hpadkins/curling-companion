import React from 'react'
import styles from "./Styles";
import { View, Text, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Curling Companion</Text>
      </View>
      <View style={styles.buttonContainer}>
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
    </View>
  );
};

export default HomeScreen;
