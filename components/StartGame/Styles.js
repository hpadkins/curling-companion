import { StyleSheet } from "react-native";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    paddingBottom: 100,
    backgroundColor: '#E5FFFF',
  },
  optionContainer: {
    backgroundColor: '#979799',
    borderRadius: 10,
    width: wp('90%'),
    marginTop: hp('1.5%'),
  },
  optionTitle: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7E0006',
    borderRadius: 50,
    height: hp('5%'),
    marginTop: hp('2%'),
    marginLeft: wp('3%'),
    marginRight: wp('3%'),
    marginBottom: hp('2.5%')
  },
  optionText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: wp('4.3%'),
  },
  labelContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelText: {
    fontSize: wp('3.5%'),
    lineHeight: hp('3.4%'),
    color: 'white'
  },
  missedOptionContainer: {
    backgroundColor: '#979799',
    borderRadius: 10,
    width: wp('90%'),
    marginTop: hp('1.5%')
  },
  missedOptionText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: wp('5.3%'),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: hp('1.5%'),
  },
  missedTitleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: hp('2%'),
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#530004',
    width: wp('80%')
  }
});

export default styles;
