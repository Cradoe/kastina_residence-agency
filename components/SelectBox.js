import React from "react";

import { StyleSheet, View, Text } from "react-native";
import Select from "@material/react-select";
// import "@material/react-select/dist/select.css";
const SelectBox = ({ label, value, onChangeText, options }) => {
  return (
    <View>
      <Text>{label}</Text>
      <Select
        style={{
          height: 45,
          width: "100%",
          backgroundColor: "transparent",
          borderRadius: 5,
          borderStyle: "solid",
          borderWidth: 1,
          borderColor: "#aaa",
          padding: 5,
          color: "#333"
        }}
        value={value}
        onChange={(e) => {
          onChangeText(e.target.value);

          console.log(e.target.value);
        }}
        options={options}
      />
    </View>
  );
};
export default SelectBox;
