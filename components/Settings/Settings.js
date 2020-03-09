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
            <View style={styles.setting}>
             <MaterialIcons style={styles.settings}
                    name='settings'
                    size={40}
                    onPress={this.openingO} 
            />
             {this.state.isVisible?
            <Overlay
                isVisible={this.state.isVisible}
                width="auto"
                height="auto" 
                onBackdropPress={this.openingO}
            >
                <Button  title="Vibrate" onPress={()=>console.log("press")} />
                <Button  title="Sound" onPress={()=>console.log("press")} />
            </Overlay>:null}
                 
        </View>
        );
    }
}
  
  const styles = StyleSheet.create({
    settings:{
       // alignItems: 'top'
        top: 25,
        right: 20,
        position: 'absolute',
    },

    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });