import { StyleSheet } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from "react-native-responsive-screen";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5FFFF",
    alignItems: "center"
  },
  titleContainer: {
    marginTop: hp("25%"),
    marginBottom: hp("5%")
  },
  title: {
    fontSize: wp("8%")
  },
  header3: {
    fontSize: wp("5%")
  },
  buttonContainer: {
    flex: 0.9,
    justifyContent: "center"
  },
  button: {
    height: hp("7%"),
    width: wp("35%"),
    borderRadius: wp("10%"),
    margin: 5,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center"
  },
  buttonText: {
    color: "white",
    fontSize: hp("2%")
  }
});

export default styles;
