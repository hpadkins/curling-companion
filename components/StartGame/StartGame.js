import React, { Component }  from 'react'
import styles from "./Styles";
import { ScrollView, View, Text } from 'react-native';
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

const missedWeightOpts = [
  { label: changeLabelStyle('Light'), value: 0 },
  { label: changeLabelStyle('Heavy'), value: 1 },
];

const missedLineOpts = [
  { label: changeLabelStyle('Inside'), value: 0 },
  { label: changeLabelStyle('Wide'), value: 1 },
];

const missedOther1Opts = [
  { label: changeLabelStyle('Sweeping Error'), value: 0 },
];

const missedOther2Opts = [
  { label: changeLabelStyle('Line-call Error'), value: 0 },
];

class StartGame extends Component {

  constructor() {
    super();
    this.state = {
      chosenRotation: 0,
      chosenShotType: 0,
      chosenScore: 0,
      chosenWeightMissed: 0,
      chosenLineMissed: 0,
      sweepMissed: 0,
      lineMissed: 0
    }
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
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
                this.setState({chosenRotation: value});
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
                  this.setState({chosenShotType: value});
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
                  this.setState({chosenScore: value});
                }}
              />
            </View>
          </View>
          <View style={styles.optionContainer}>
            <View style={styles.optionTitle}>
              <Text style={styles.optionText}>Missed Shot</Text>
            </View>
            <View style={styles.labelContainer}>
              <View style={styles.missedTitleContainer}>
                <Text style={styles.missedOptionText}>Weight</Text>
                <RadioForm
                  radio_props={missedWeightOpts}
                  formHorizontal={true}
                  labelHorizontal={false}
                  animation={false}
                  buttonColor={"#A0060F"}
                  selectedButtonColor={"#A0060F"}
                  labelColor={'#FFFFFF'}
                  selectedLabelColor={'#FFFFFF'}
                  initial={0}
                  onPress={value => {
                    this.setState({chosenWeightMissed: value});
                  }}
                />
              </View>

            </View>
            <View style={styles.labelContainer}>
              <View style={styles.missedTitleContainer}>
                <Text style={styles.missedOptionText}>Line</Text>
                <RadioForm
                  radio_props={missedLineOpts}
                  formHorizontal={true}
                  labelHorizontal={false}
                  animation={false}
                  buttonColor={"#A0060F"}
                  selectedButtonColor={"#A0060F"}
                  labelColor={'#FFFFFF'}
                  selectedLabelColor={'#FFFFFF'}
                  initial={0}
                  onPress={value => {
                    this.setState({chosenLineMissed: value});
                  }}
                />
              </View>

            </View>
            <View style={styles.labelContainer}>
              <View style={styles.missedTitleContainer}>
                <Text style={styles.missedOptionText}>Other</Text>
                <RadioForm
                  radio_props={missedOther1Opts}
                  formHorizontal={true}
                  labelHorizontal={false}
                  animation={false}
                  buttonColor={"#A0060F"}
                  selectedButtonColor={"#A0060F"}
                  labelColor={'#FFFFFF'}
                  selectedLabelColor={'#FFFFFF'}
                  initial={0}
                  onPress={value => {
                    this.setState({chosenOther1Missed: value});
                  }}
                />
                <RadioForm
                  radio_props={missedOther2Opts}
                  formHorizontal={true}
                  labelHorizontal={false}
                  animation={false}
                  buttonColor={"#A0060F"}
                  selectedButtonColor={"#A0060F"}
                  labelColor={'#FFFFFF'}
                  selectedLabelColor={'#FFFFFF'}
                  initial={0}
                  onPress={value => {
                    this.setState({chosenOther2Missed: value});
                  }}
                />
              </View>

            </View>
          </View>
      </ScrollView>
    );
  }
};

export default StartGame;
