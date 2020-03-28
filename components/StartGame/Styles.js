import { StyleSheet } from "react-native";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    paddingBottom: hp('30%'),
    backgroundColor: '#E5FFFF',
  },
  optionContainer: {
    backgroundColor: '#979799',
    borderRadius: 10,
    height: hp('20%'),
    width: wp('90%'),
    marginTop: hp('1.5%')
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
  },
  missedOptionText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: wp('4.3%')
  },
  missedTitleContainer: {

  }
});

export default styles;
