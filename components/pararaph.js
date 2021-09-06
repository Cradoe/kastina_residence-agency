import React from "react";
import { Text, StyleSheet } from "react-native";
import { globalStyles } from "../shared/global";

const Paragraph = ({ align, children }) => {
  return (
    <Text
      style={[globalStyles[align ? align : "textJustify"], styles.paragraph]}
    >
      {children}
    </Text>
  );
};
export default Paragraph;

const styles = StyleSheet.create({
  paragraph: {
    marginVertical: 10,
    fontFamily: "nunito-regular"
  }
});
