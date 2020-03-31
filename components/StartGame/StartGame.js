import React, { Component }  from 'react'
import styles from "./Styles";
import { View, Text, Image} from 'react-native';

class StartGame extends Component 
{
  constructor() {
    super();
    this.state = { 
      currentEnd: 0,
      currentPlayer: 0,
    };
  }

  displayCurrentPlayer(curentPlayer) {
    if(curentPlayer < 2) {
      return <Text style={styles.player}>PLAYER 1:</Text>
    } else if (curentPlayer < 4) {
      return <Text style={styles.player}>PLAYER 2:</Text>
    } else if (curentPlayer < 6){
      return <Text style={styles.player}>PLAYER 3:</Text>
    } else {
      return <Text style={styles.player}>PLAYER 4:</Text>
    }
  }

  render() {
    //Pass #ends from PreGameScreen 
    const numbOfEnds = this.props.route.params.numbOfEnds; 

    return (
      <View style={styles.container}>
        <Text style={styles.end}>END {this.state.currentEnd +1} of {numbOfEnds}</Text>
        {this.displayCurrentPlayer(this.state.currentPlayer)}
        <Text style={styles.temp}>Placeholders for shot scoring</Text>
        <Text style={styles.temp}>Placeholders for shot scoring</Text>
        <Text style={styles.temp}>Placeholders for shot scoring</Text>
        <Text style={styles.temp}>Placeholders for shot scoring</Text>
      </View>
    );
  }
};

export default StartGame;