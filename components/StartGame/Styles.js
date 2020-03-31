import { StyleSheet } from "react-native";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5FFFF',
    alignItems: 'stretch',
  },
  player: {
    flex: 1, 
    fontSize: hp('4%'),
    alignSelf: 'flex-start',
  },
  end: {
    height: hp('7%'),
    justifyContent: 'center',
    fontSize: hp('5%'),
    marginBottom: 10,
    backgroundColor: '#CEE5E5',
    textAlign: 'center',
    borderBottomWidth: 2,
  },
  temp: {
    flex: 1,
    margin: 3,
    textAlign: 'center',
    borderWidth: 2,
    borderColor: '#CEE5E5',
  },
});

export default styles;
