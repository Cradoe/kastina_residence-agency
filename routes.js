import React from "react";
import { Animated } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./screens/home";
import About from "./screens/about";
import Benefits from "./screens/benefits";
import Login from "./screens/login";
import Register from "./screens/register";
import Header from "./shared/header";
import Account from "./screens/account";
import CardStatus from "./screens/cardStatus";
import Biometrics from "./screens/biometric";
import VerifyCard from "./screens/verifyCard";
import RenewCard from "./screens/renewCard";
import Splash from "./screens/splashScreen";

const config = {
  animation: "spring",
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01
  }
};
const screenForFade = ({ current, closing }) => ({
  cardStyle: {
    opacity: current.progress
  }
});
const headerForFade = ({ current, next }) => {
  const opacity = Animated.add(
    current.progress,
    next ? next.progress : 0
  ).interpolate({
    inputRange: [0, 1, 2],
    outputRange: [0, 1, 0]
  });

  return {
    leftButtonStyle: { opacity },
    rightButtonStyle: { opacity },
    titleStyle: { opacity },
    backgroundStyle: { opacity }
  };
};
const MyTransition = {
  gestureDirection: "horizontal",
  transitionSpec: {
    open: config,
    close: config
  },
  cardStyleInterpolator: screenForFade,
  headerStyleInterpolator: headerForFade
};
const Stack = createStackNavigator();
function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        // headerMode="float"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#C50E11"
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold"
          },
          gestureEnabled: true,
          ...MyTransition
        }}
      >
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="About"
          component={About}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Account"
          component={Account}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="CardStatus"
          component={CardStatus}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Benefits"
          component={Benefits}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Biometrics"
          component={Biometrics}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="VerifyCard"
          component={VerifyCard}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="RenewCard"
          component={RenewCard}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Navigator;
