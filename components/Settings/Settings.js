import React, { Component } from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import { Overlay } from 'react-native-elements';
import { MaterialIcons } from 'react-native-vector-icons';

export default class Settings extends Component {
    constructor(props){
        super(props);
        this.state = {
            isVisible: false
        };
    }

    openingO = () => {
        this.setState({isVisible:!this.state.isVisible})
    }

    render(){
        return(
            <View style={styles.container}>
             
             <MaterialIcons 
                    name='settings'
                    size={25}
    
                    onPress={this.openingO} />
             {this.state.isVisible?
        <Overlay
            isVisible={this.state.isVisible}
            width="auto"
            height="auto" 
            onBackdropPress={this.openingO}
            >
        <Button  title="Vibrate" onPress={()=>console.log("press")} />
        <Button  title="Sound" onPress={()=>console.log("press")} />
        <Button  title="Hi" onPress={()=>console.log("press")} />
        </Overlay>:null}
                 
        </View>
        );
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