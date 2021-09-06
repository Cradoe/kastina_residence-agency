import React, { useState, useEffect } from "react";
import { Text, StyleSheet, ActivityIndicator } from "react-native";
import { Button } from "native-base";
const CustomButton = ({
  title,
  onPress,
  style,
  spinOnClick,
  rounded,
  small
}) => {
  const [spin, setSpin] = useState(false);
  const handleClick = () => {
    if (spinOnClick) {
      setSpin(true);
    }
    onPress();
  };

  useEffect(() => {
    if (!spinOnClick) {
      return;
    }
    let timeOut = setTimeout(() => {
      setSpin(false);
    }, 2500);
    return () => {
      clearTimeout(timeOut);
    };
  }, [spin]);
  return (
    <Button
      rounded={rounded ? true : false}
      small={small ? true : false}
      block
      onPress={handleClick}
      style={[styles.button, style ? style : null]}
    >
      {spin ? (
        <ActivityIndicator
          size="small"
          color="#ffffff"
          style={{ marginRight: 10 }}
        />
      ) : null}
      <Text style={{ color: "#fff", fontSize: 15 }}>{title}</Text>
    </Button>
  );
};
export default CustomButton;
const styles = StyleSheet.create({
  button: {
    backgroundColor: "#C50E11",
    padding: 10,
    flexDirection: "row",
    justifyContent: "center"
  }
});
