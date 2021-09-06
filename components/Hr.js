import React from "react";
import { View } from "react-native";

const Hr = ({ style }) => {
  return (
    <View
      style={[{ borderBottomColor: "black", borderBottomWidth: 1 }, style]}
    ></View>
  );
};
export default Hr;
