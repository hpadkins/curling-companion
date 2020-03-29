import React, { Component }  from 'react'
import styles from "./Styles";
import { ScrollView, View, Text } from 'react-native';
import RadioForm, { RadioButtonLabel, RadioButton, RadioButtonInput } from "react-native-simple-radio-button";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const OptionsEnum = {
  ROTATION: 'rotation',
  SHOT_TYPE: 'shot type',
  SCORE: 'score',
  WEIGHT: 'weight',
  LINE: 'line',
  SWEEP_ERROR: 'sweep error',
  LINE_ERROR: 'line error'
};
Object.freeze(OptionsEnum);


const rotationOpts = [
  { label: 'In-turn', value: 0 },
  { label: 'Out-turn', value: 1 }
];

const shotTypeOpts = [
  { label: 'Guard', value: 0 },
  { label: 'Draw', value: 1 },
  { label: 'Hit', value: 2 }
];

const scoreOpts = [
  { label: '0', value: 0 },
  { label: '1', value: 1 },
  { label: '2', value: 2 },
  { label: '3', value: 3 },
  { label: '4', value: 4 },
];

const missedWeightOpts = [
  { label: 'Light', value: 0 },
  { label: 'Heavy', value: 1 },
];

const missedLineOpts = [
  { label: 'Inside', value: 0 },
  { label: 'Wide', value: 1 },
];

const missedOther1Opts = [
  { label: 'Sweeping Error', value: 0 },
];

const missedOther2Opts = [
  { label: 'Line-call Error', value: 0 },
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
      sweepError: 0,
      lineError: 0
    }
  }

  handleRadioPress = (optionName, value) =>
    optionName === OptionsEnum.ROTATION ? this.setState({ chosenRotation: value }) :
    optionName === OptionsEnum.SHOT_TYPE ? this.setState({ chosenShotType: value }) :
    optionName === OptionsEnum.SCORE ? this.setState({ chosenScore: value }) :
    optionName === OptionsEnum.WEIGHT ? this.setState({ chosenWeightMissed: value }) :
    optionName === OptionsEnum.LINE ? this.setState({ chosenLineMissed: value }) :
    optionName === OptionsEnum.SWEEP_ERROR ? this.setState({ sweepError: value }) :
    optionName === OptionsEnum.LINE_ERROR ? this.setState({ lineError: value }) :
    console.log('Cannot set radio button state.');

  // This function returns the value of the state selected so that we can update the radio button on the UI
  returnSelectedState = (optionName) =>
    optionName === OptionsEnum.ROTATION ? this.state.chosenRotation :
    optionName === OptionsEnum.SHOT_TYPE ? this.state.chosenShotType :
    optionName === OptionsEnum.SCORE ? this.state.chosenScore :
    optionName === OptionsEnum.WEIGHT ? this.state.chosenWeightMissed :
    optionName === OptionsEnum.LINE ? this.state.chosenLineMissed :
    optionName === OptionsEnum.SWEEP_ERROR ? this.state.sweepError :
    optionName === OptionsEnum.LINE_ERROR ? this.state.lineError :
    console.log('Cannot return state.');

  renderRadioButtons = (option, optionName) => {
    return (
      <RadioForm
        formHorizontal={true}
        animation={false}
      >
        {
          option.map((obj, i) => (
            <RadioButton
              labelHorizontal={false}
              key={i}
            >
              <RadioButtonInput
                obj={obj}
                index={i}
                onPress={() => this.handleRadioPress(optionName, obj.value)}
                isSelected={this.returnSelectedState(optionName) === i}
                borderWidth={wp('.5%')}
                buttonInnerColor={'#A0060F'}
                buttonOuterColor={'#A0060F'}
                buttonSize={wp('5%')}
                buttonOuterSize={wp('7.4%')}
                buttonStyle={{}}
                buttonWrapStyle={{marginLeft: wp('2.5%')}}
              />
              <RadioButtonLabel
                obj={obj}
                index={i}
                onPress={() => this.handleRadioPress(optionName, obj.value)}
                labelHorizontal={true}
                labelStyle={styles.labelText}
                labelWrapStyle={{marginLeft: wp('1%')}}
              />
            </RadioButton>
          ))
        }
      </RadioForm>
    )
  };

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.optionContainer}>
            <View style={styles.optionTitle}>
              <Text style={styles.optionText}>Rotation</Text>
           </View>
          <View style={styles.labelContainer}>
            {this.renderRadioButtons(rotationOpts, OptionsEnum.ROTATION)}
          </View>
        </View>
          <View style={styles.optionContainer}>
            <View style={styles.optionTitle}>
              <Text style={styles.optionText}>Shot Type</Text>
            </View>
            <View style={styles.labelContainer}>
              {this.renderRadioButtons(shotTypeOpts, OptionsEnum.SHOT_TYPE)}
            </View>
          </View>
          <View style={styles.optionContainer}>
            <View style={styles.optionTitle}>
              <Text style={styles.optionText}>Score</Text>
            </View>
            <View style={styles.labelContainer}>
              {this.renderRadioButtons(scoreOpts, OptionsEnum.SCORE)}
            </View>
          </View>
          <View style={styles.missedOptionContainer}>
            <View style={styles.optionTitle}>
              <Text style={styles.optionText}>Missed Shot</Text>
            </View>
            <View style={styles.labelContainer}>
              <View style={styles.missedTitleContainer}>
                <Text style={styles.missedOptionText}>Weight</Text>
                {this.renderRadioButtons(missedWeightOpts, OptionsEnum.WEIGHT)}
              </View>
            </View>
            <View style={styles.labelContainer}>
              <View style={styles.missedTitleContainer}>
                <Text style={styles.missedOptionText}>Line</Text>
                {this.renderRadioButtons(missedLineOpts, OptionsEnum.LINE)}
              </View>
            </View>
            <View style={styles.labelContainer}>
              <View style={styles.missedTitleContainer}>
                <Text style={styles.missedOptionText}>Other</Text>
                {this.renderRadioButtons(missedOther1Opts, OptionsEnum.SWEEP_ERROR)}
                {this.renderRadioButtons(missedOther2Opts, OptionsEnum.LINE_ERROR)}
              </View>
            </View>
          </View>
      </ScrollView>
    );
  }
};

export default StartGame;
