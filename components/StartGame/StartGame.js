import React, { Component }  from 'react'
import styles from "./Styles";
import { View, Text, Image} from 'react-native';
import RadioForm from "react-native-simple-radio-button";

const changeLabelStyle = (labelText) => {
  return (
      <Text style={styles.labelText}>
        {labelText}
      </Text>
    )
};

const rotationOpts = [
  { label: changeLabelStyle('In-turn'), value: 0 },
  { label: changeLabelStyle('Out-turn'), value: 1 }
];

class StartGame extends Component {

  constructor() {
    super();
    this.state = {
      chosenRotation: 0
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.optionContainer}>
          <View style={styles.optionTitle}>
            <Text style={styles.optionText}>Rotation</Text>
          </View>
          <View style={styles.labelContainer}>
            <RadioForm
              radio_props={rotationOpts}
              formHorizontal={true}
              labelHorizontal={false}
              animation={false}
              buttonColor={"#A0060F"}
              selectedButtonColor={"#A0060F"}
              labelColor={'#FFFFFF'}
              selectedLabelColor={'#FFFFFF'}
              initial={0}
              onPress={value => {
                this.setState({ chosenRotation: value });
              }}
            />
          </View>
        </View>
        <View style={styles.optionContainer}>

        </View>
      </View>
    );
  }
};

export default StartGame;
