import React, { Component } from "react";
import styles from "./Styles";
import { View, Text, TouchableOpacity } from "react-native";
import {
  listenOrientationChange,
  removeOrientationListener
} from "react-native-responsive-screen";
import Settings from "../Settings/Settings";
// import StartGame from "../StartGame/StartGame";

import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel
} from "react-native-simple-radio-button";

const endOpts = [
  { label: "6", value: 6 },
  { label: "8", value: 8 },
  { label: "10", value: 10 }
];

class PreGameScreen extends Component {
  constructor() {
    super();
    this.state = { chosenOpt: 6 };
  }

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
        <Settings />
        <View style={styles.titleContainer}>
          <Text style={styles.header3}>
            How many ends would you like to track?
          </Text>
        </View>
        <RadioForm
          radio_props={endOpts}
          formHorizontal={true}
          labelHorizontal={false}
          animation={false}
          buttonColor={"#A0060F"}
          selectedButtonColor={"#A0060F"}
          //labelColor={"#A0060F"}
          initial={6}
          onPress={value => {
            this.setState({ chosenOpt: value });
          }}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("StartGame", {numbOfEnds: this.state.chosenOpt})}
          >
            <Text style={styles.buttonText}>Start Game</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default PreGameScreen;
