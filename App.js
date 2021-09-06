import React, { useState } from "react";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import Navigator from "./routes";
import { setCustomText } from "react-native-global-props";
import { Ionicons } from "@expo/vector-icons";
import GeneralStatusBar from "./components/generalStatusBar";
import { CONSTANTS } from "./shared/global";

const customFonts = {
  "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
  "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
  "nunito-black": require("./assets/fonts/Nunito-Black.ttf"),
  TickingTimebombBB: require("./assets/fonts/TickingTimebombBB.ttf"),
  Roboto: require("native-base/Fonts/Roboto.ttf"),
  Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
  ...Ionicons.font
};
const customTextProps = {
  style: {
    fontFamily: "nunito-regular"
  }
};

export default function App() {
  setCustomText(customTextProps);
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const loadFontsAsync = async () => {
    await Font.loadAsync(customFonts);
  };

  if (fontsLoaded) {
    return (
      <>
        <GeneralStatusBar backgroundColor={CONSTANTS.primaryColor} />
        <Navigator />
      </>
    );
  } else {
    return (
      <AppLoading
        startAsync={loadFontsAsync}
        onFinish={() => setFontsLoaded(true)}
      />
    );
  }
}
