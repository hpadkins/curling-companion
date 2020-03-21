import React, { Component }  from 'react'
import styles from "./Styles";
import { View, Text, Image} from 'react-native';

class StartGame extends Component 
{
    render() {
        return (
            <View style={styles.container}>
                <Image source={require('./img/curling.svg')} 
                       style={{width: 400, height: 400}} />
            </View>
        );
    }
};

export default StartGame;