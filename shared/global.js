import { StyleSheet, AsyncStorage, Alert, Dimensions } from "react-native";

import Constants from "expo-constants";
export const globalStyles = StyleSheet.create({
  pageWrapper: {
    flex: 1,
    minHeight: Dimensions.get("window").height
  },
  bgPrimary: {
    backgroundColor: "#C50E11"
  },
  bgTransparent: {
    backgroundColor: "transparent"
  },
  bgOverlay: {
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(197, 14, 17,.4)"
  },
  titleText: {
    color:'#333'
  },
  captionText: {
   fontSize:12 
  },
  plainBtn: {
    borderWidth: 0,
    shadowColor: "transparent",
    padding: 0
  },
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    marginHorizontal: 16
  },
  flexRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  },
  textJustify: {
    textAlign: "justify"
  },
  textCenter: {
    textAlign: "center"
  },
  spaceAround: {
    justifyContent: "space-around"
  },
  spaceBetween: {
    justifyContent:'space-between'
  },
  centerCenter: {
    justifyContent: "center",
    alignItems: "center"
  },
  textBold: {
    fontWeight: "bold"
  },
  fullWidth: {
    width:'100%'
  },
  formControl: {
    height: 40,
    width: "100%",
    backgroundColor: "transparent",
    borderRadius: 5,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#eee",
    padding: 5,
    color: "#aaa"
  },
  br50: {
    borderRadius: 50
  },
  br10: {
    borderRadius: 10
  },
  formGroup: {
    width: "100%",
    paddingHorizontal: 10,
    marginVertical: 5
  },
  picContainer: {
    alignItems: "center",
    position: "absolute",
    top: -35,
    left: 10,
    width: "100%"
  },
  profilePicture: {
    width: 70,
    height: 70,
    backgroundColor: "#ccc",
    borderRadius: 50,
    margin: "auto"
  },
  errorText: {
    color: "crimson",
    fontWeight: "bold",
    marginTop: 8,
    marginBottom: 6
  },
  spinnerTextStyle: {
    color: "#FFF"
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "center"
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,.7)"
  },
  label: {
    color: "#aaa",
    marginVertical: 5
  },
  textWhite: {
    color: "#fff"
  },
  grayColor: {
    color: "#aaa"
  }
});
export const storeData = async (title, data) => {
  try {
    return await AsyncStorage.setItem(title, JSON.stringify(data));
  } catch (error) {
    Alert.alert("Opps!", "Something went wrong.");
    console.log("Somethin went wrong.", error);
  }
};
export const getData = async (title) => {
  try {
    let data = await AsyncStorage.getItem(title);
    return JSON.parse(data);
  } catch (error) {
    Alert.alert("Opps!", "Something went wrong.");
    console.log("Somethin went wrong.", error);
  }
};
export const deleteData = async (title) => {
  try {
    await AsyncStorage.removeItem(title);
  } catch (error) {
    Alert.alert("Opps!", "Something went wrong.");
    console.log("Somethin went wrong.", error);
  }
};

export const CONSTANTS = {
  //  serverApiUrl: "http://255.255.255.0/new-lasrra/Lasrra/api",
  //  serverImageStoragePath:
  //    "https://255.255.255.0/new-lasrra/Lasrra/uploads/",
  serverApiUrl: "https://www.ifamthepresident.com/lasrra-api/api/",
  serverImageStoragePath: "https://www.ifamthepresident.com/lasrra-api/uploads/",
  primaryColor: "#C50E11"
};  
