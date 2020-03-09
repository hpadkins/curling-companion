import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { MaterialIcons } from 'react-native-vector-icons';

export default class Settings extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }
    render(){
        return(
            <View style={styles.container}>
             <Text>Settings!!!</Text>
                 <MaterialIcons name='settings' />
            </View>
        )
    }
}
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });