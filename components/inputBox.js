import React from "react";
import { View, Text, TextInput } from "react-native";
import { globalStyles } from "../shared/global";
const InputBox = ({ label, type, placeholder, onChangeText, keyboardType }) => {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput
        keyboardType={keyboardType ? keyboardType : "default"}
        style={globalStyles.formControl}
        placeholder={placeholder}
        onChangeText={onChangeText}
      />
    </View>
  );
};
export default InputBox;
