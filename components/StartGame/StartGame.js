import React, { Component }  from 'react'
import styles from "./Styles";
import { View, Text, Image} from 'react-native';

class StartGame extends Component 
{
  constructor() {
    super();
    this.state = { 
      currentEnd: 0,
      currentShot: 0,
    };
  }

  displayCurrentPlayer(curentShot) {
    if(curentShot < 2) {
      return <Text style={styles.player}>PLAYER 1:</Text>
    } else if (curentShot < 4) {
      return <Text style={styles.player}>PLAYER 2:</Text>
    } else if (curentShot < 6){
      return <Text style={styles.player}>PLAYER 3:</Text>
    } else {
      return <Text style={styles.player}>PLAYER 4:</Text>
    }
  }

  render() {
    const numbOfEnds = this.props.route.params.numbOfEnds; 

    return (
      <View style={styles.container}>
        <Text style={styles.end}>END {this.state.currentEnd +1} of {numbOfEnds}</Text>
        {this.displayCurrentPlayer(this.state.curentShot)}
        <Text style={styles.temp}>Placeholders for shot scoring</Text>
        <Text style={styles.temp}>Placeholders for shot scoring</Text>
        <Text style={styles.temp}>Placeholders for shot scoring</Text>
        <Text style={styles.temp}>Placeholders for shot scoring</Text>
      </View>
    );
  }
};

export default StartGame;