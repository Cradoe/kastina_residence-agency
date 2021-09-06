import React from "react";
import { View } from "react-native";
import { globalStyles } from "../shared/global";
const FormGroup = ({ children }) => {
  return <View style={globalStyles.formGroup}>{children}</View>;
};
export default FormGroup;
