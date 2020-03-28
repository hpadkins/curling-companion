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

const shotTypeOpts = [
  { label: changeLabelStyle('Guard'), value: 0 },
  { label: changeLabelStyle('Draw'), value: 1 },
  { label: changeLabelStyle('Hit'), value: 2 }
];

const scoreOpts = [
  { label: changeLabelStyle('0'), value: 0 },
  { label: changeLabelStyle('1'), value: 1 },
  { label: changeLabelStyle('2'), value: 2 },
  { label: changeLabelStyle('3'), value: 3 },
  { label: changeLabelStyle('4'), value: 4 },
];

class StartGame extends Component {

  constructor() {
    super();
    this.state = {
      chosenRotation: 0,
      chosenShotType: 0,
      chosenScore: 0
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
          <View style={styles.optionTitle}>
            <Text style={styles.optionText}>Shot Type</Text>
          </View>
          <View style={styles.labelContainer}>
            <RadioForm
              radio_props={shotTypeOpts}
              formHorizontal={true}
              labelHorizontal={false}
              animation={false}
              buttonColor={"#A0060F"}
              selectedButtonColor={"#A0060F"}
              labelColor={'#FFFFFF'}
              selectedLabelColor={'#FFFFFF'}
              initial={0}
              onPress={value => {
                this.setState({ chosenShotType: value });
              }}
            />
          </View>
        </View>
        <View style={styles.optionContainer}>
          <View style={styles.optionTitle}>
            <Text style={styles.optionText}>Score</Text>
          </View>
          <View style={styles.labelContainer}>
            <RadioForm
              radio_props={scoreOpts}
              formHorizontal={true}
              labelHorizontal={false}
              animation={false}
              buttonColor={"#A0060F"}
              selectedButtonColor={"#A0060F"}
              labelColor={'#FFFFFF'}
              selectedLabelColor={'#FFFFFF'}
              initial={0}
              onPress={value => {
                this.setState({ chosenScore: value });
              }}
            />
          </View>
        </View>
      </View>
    );
  }
};

export default StartGame;
