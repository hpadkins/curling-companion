import { StyleSheet } from "react-native";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5FFFF',
    alignItems: 'center',
  },
  titleContainer: {
    marginTop: hp('25%'),
  },
  title: {
    fontSize: wp('8%'),
  },
  buttonContainer: {
    flex: .9,
    justifyContent: 'center',
  },
  button: {
    height: hp('7%'),
    width: wp('35%'),
    borderRadius: wp('10%'),
    margin: 5,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: hp('2%')
  },
  optionContainer: {
    backgroundColor: '#979799',
    borderRadius: 10,
    height: hp('20%'),
    width: wp('90%'),
    marginTop: hp('4%')
  },
  optionTitle: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#A0060F',
    borderRadius: 50,
    height: hp('5%'),
    width: wp('25%'),
    marginTop: hp('2%'),
    marginLeft: wp('3%'),
    marginBottom: hp('2.5%')
  },
  optionText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: wp('4.3%')
  },
  labelContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelText: {
    fontWeight: 'bold',
    fontSize: wp('4%')
  }
});

export default styles;
