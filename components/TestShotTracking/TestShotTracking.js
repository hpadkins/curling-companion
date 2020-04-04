import React, { Component } from "react";
import styles from "./Styles";
import { ScrollView, View, Text } from "react-native";
import RadioForm, {
  RadioButtonLabel,
  RadioButton,
  RadioButtonInput
} from "react-native-simple-radio-button";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

class testShotTracking extends Component {
  constructor() {
    super();
    this.state = {
      scoreList: []
    };
  }

  render() {
    const { navigation } = this.props;
    return (
      <View>
        <ScrollView contentContainerStyle={styles.container}>
          <View></View>
        </ScrollView>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
            <Text>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default StartGame;
