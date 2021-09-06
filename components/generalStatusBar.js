import React from "react";
import { View, StatusBar, StyleSheet, Platform } from "react-native";

const STATUSBAR_HEIGHT = Platform.OS === "ios" ? 20 : StatusBar.currentHeight;

const GeneralStatusBar = ({ backgroundColor, ...props }) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar
      barStyle="light-content"
      translucent
      backgroundColor={backgroundColor}
      {...props}
    />
  </View>
);
export default GeneralStatusBar;

const styles = StyleSheet.create({
  statusBar: {
    height: STATUSBAR_HEIGHT
  }
});
