import React, { useEffect, useState } from "react";
import { Container, Content, Text, View } from "native-base";
import { globalStyles, getData } from "../shared/global";
import {
  Dimensions,
  StatusBar,
  Platform,
  Image,
  ActivityIndicator
} from "react-native";
import { CommonActions } from "@react-navigation/native";

const STATUSBAR_HEIGHT = Platform.OS === "ios" ? 20 : StatusBar.currentHeight;
const fullHeight = Dimensions.get("screen").height - STATUSBAR_HEIGHT;
const Splash = ({ navigation }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigateAway = (screen) => {
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{ name: screen }]
      })
    );
  };
  const checkIfLoggedIn = () => {
    getData("userData")
      .then((userData) => {
        if (userData) {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      })
      .catch((error) => {
        Alert.alert("Opps!", "Something went wrong");
        console.log(error);
      });
  };

  useEffect(() => {
    checkIfLoggedIn();

    setTimeout(() => {
      if (isLoggedIn) {
        navigateAway("Home");
      } else {
        navigateAway("Login");
      }
    }, 3000);
  }, []);

  return (
    <Container>
      <Content style={[globalStyles.bgPrimary]}>
        <View style={{ height: fullHeight }}>
          <Image
            source={require("../assets/splash.gif")}
            resizeMode="contain"
            style={{ width: "100%", height: fullHeight - 50 }}
          />
          <ActivityIndicator size="small" color="#ffffff" />
        </View>
      </Content>
    </Container>
  );
};
export default Splash;
